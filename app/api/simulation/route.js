/**
 * Simulation Submission API Route
 *
 * POST endpoint that saves a completed simulation to the database.
 * Validates user information and business metrics, calculates profit projections for
 * all 12 strategies, and stores the complete simulation data.
 *
 */

import { NextResponse } from 'next/server';
import { saveSimulation } from '@/lib/db';

export async function POST(request) {
  try {
    const data = await request.json();

    // Basic validation
    if (!data.firstName || !data.lastName || !data.email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!data.annualRevenue || !data.grossProfitMargin || !data.netProfitMargin || data.overallImpact === undefined) {
      return NextResponse.json(
        { error: 'Missing required business metrics' },
        { status: 400 }
      );
    }

    // Save to database
    const result = await saveSimulation(data);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Failed to save simulation' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, id: result.id },
      { status: 201 }
    );
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
