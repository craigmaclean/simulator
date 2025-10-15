import { NextResponse } from 'next/server';
import { renderToBuffer } from '@react-pdf/renderer';
import { supabaseServer } from '@/lib/db/supabaseServer';
import { getSimulation } from '@/lib/db/saveSimulation';
import ReportTemplate from '@/lib/pdf/ReportTemplate';
import { sendReportEmail } from '@/lib/email/sendReportEmail';

export async function POST(request) {
  try {
    const { simulationId } = await request.json();

    if (!simulationId) {
      return NextResponse.json(
        { error: 'Simulation ID is required' },
        { status: 400 }
      );
    }

    // 1. Get simulation data with enriched calculations
    const { simulation, error: fetchError } = await getSimulation(simulationId);

    if (fetchError || !simulation) {
      return NextResponse.json(
        { error: 'Simulation not found' },
        { status: 404 }
      );
    }

    // 2. Generate PDF
    const pdfBuffer = await renderToBuffer(<ReportTemplate simulation={simulation} />);

    // 3. Upload to Supabase Storage
    const filename = `simulation_${simulationId}_${Date.now()}.pdf`;
    const { error: uploadError } = await supabaseServer.storage
      .from('reports')
      .upload(filename, pdfBuffer, {
        contentType: 'application/pdf',
        upsert: false,
      });

    if (uploadError) {
      console.error('Upload error:', uploadError);
      return NextResponse.json(
        { error: 'Failed to upload PDF' },
        { status: 500 }
      );
    }

    // 4. Update simulation record with PDF filename
    const { error: updateError } = await supabaseServer
      .from('simulations')
      .update({
        report_filename: filename,
        report_generated_at: new Date().toISOString(),
      })
      .eq('id', simulationId);

    if (updateError) {
      console.error('Update error:', updateError);
    }

    // 5. Send email with PDF attachment
    const emailResult = await sendReportEmail({
      to: simulation.email,
      firstName: simulation.first_name,
      pdfBuffer,
      filename,
    });

    if (!emailResult.success) {
      console.error('Email error:', emailResult.error);
      return NextResponse.json(
        { error: 'PDF generated but email failed to send' },
        { status: 500 }
      );
    }

    // 6. Return success
    return NextResponse.json({
      success: true,
      message: 'Report generated and sent successfully',
      filename,
    });

  } catch (error) {
    console.error('Error in generate-report API:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}
