import { NextResponse } from 'next/server';
import { getSimulation } from '@/lib/db/saveSimulation';
import { sendReportEmail } from '@/lib/email/sendReportEmail';

export async function POST(request) {
  try {
    console.log('🚀 Starting email send...');

    const { simulationId } = await request.json();
    console.log('📋 Simulation ID:', simulationId);

    if (!simulationId) {
      console.error('❌ No simulation ID provided');
      return NextResponse.json(
        { error: 'Simulation ID is required' },
        { status: 400 }
      );
    }

    // 1. Get simulation data
    console.log('📊 Fetching simulation data...');
    const { simulation, error: fetchError } = await getSimulation(simulationId);

    if (fetchError || !simulation) {
      console.error('❌ Simulation not found:', fetchError);
      return NextResponse.json(
        { error: 'Simulation not found', details: fetchError },
        { status: 404 }
      );
    }
    console.log('✅ Simulation data retrieved');

    // 2. Build report URL
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL
  || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

    const reportUrl = `${process.env.NEXT_PUBLIC_APP_URL}/report/${simulationId}`;
    console.log('🔗 Report URL:', reportUrl);

    // 3. Send email with report link
    console.log('📧 Sending email...');
    try {
      const emailResult = await sendReportEmail({
        to: simulation.email,
        firstName: simulation.first_name,
        reportUrl: reportUrl,
      });

      if (!emailResult.success) {
        console.error('❌ Email error:', emailResult.error);
        return NextResponse.json(
          { error: 'Email failed to send', details: emailResult.error },
          { status: 500 }
        );
      }
      console.log('✅ Email sent successfully');
    } catch (emailError) {
      console.error('❌ Email exception:', emailError);
      return NextResponse.json(
        { error: 'Email sending failed', details: emailError.message },
        { status: 500 }
      );
    }

    // 4. Success!
    console.log('🎉 Email sent successfully!');
    return NextResponse.json({
      success: true,
      message: 'Report link sent successfully',
    });

  } catch (error) {
    console.error('❌ Unexpected error in generate-report API:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        details: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
