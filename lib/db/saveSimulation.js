import { supabase } from '@/lib/db/supabase';

/**
 * Saves a complete simulation to the database
 * Only stores essential data - derived values are calculated on retrieval
 *
 * @param {Object} params - Simulation parameters
 * @param {Object} params.userData - User contact information
 * @param {string} params.userData.firstName - User's first name
 * @param {string} params.userData.lastName - User's last name
 * @param {string} params.userData.email - User's email address
 *
 * @param {Object} params.inputs - Simulator input values
 * @param {number} params.inputs.revenue - Annual revenue
 * @param {number} params.inputs.grossMargin - Gross profit margin (%)
 * @param {number} params.inputs.netMargin - Net profit margin (%)
 * @param {number} params.inputs.globalImpact - Global impact percentage (%)
 * @param {string} params.inputs.currency - Currency code (e.g., 'USD', 'CAD', 'EUR')
 *
 * @param {Object} params.tableOneResults - Results from calculateResults()
 * @param {number} params.tableOneResults.revenueIncrease - Total revenue increase from Table One
 * @param {number} params.tableOneResults.profitIncrease - Total profit increase from Table One
 * @param {Array} params.tableOneResults.strategyResults - Array of strategy results [{ profitIncrease }]
 *
 * @param {Object|null} params.deepDiveResults - Results from calculateDeepDive() (optional)
 * @param {number} params.deepDiveResults.deepDiveRevenueIncrease - Total revenue increase from Deep Dive
 * @param {number} params.deepDiveResults.deepDiveProfitIncrease - Total profit increase from Deep Dive
 * @param {Array} params.deepDiveResults.rows - Array of Deep Dive strategy results [{ profitIncrease }]
 *
 * @param {Array} params.tableOneStrategies - Array of Table One strategy definitions
 * @param {string} params.tableOneStrategies[].id - Strategy ID (e.g., 'cut-costs')
 * @param {string} params.tableOneStrategies[].name - Strategy display name
 * @param {number} params.tableOneStrategies[].impact - Individual impact percentage for this strategy
 *
 * @param {Array|null} params.deepDiveStrategies - Array of Deep Dive strategy definitions (optional)
 * @param {string} params.deepDiveStrategies[].id - Strategy ID
 * @param {string} params.deepDiveStrategies[].name - Strategy display name
 *
 * @param {Object} params.metadata - Additional tracking information
 * @param {string|null} params.metadata.ipAddress - User's IP address
 * @param {string|null} params.metadata.userAgent - User's browser user agent
 *
 * @returns {Promise<{success: boolean, simulation?: Object, error?: string}>}
 *
 * @example
 * const result = await saveSimulation({
 *   userData: {
 *     firstName: 'John',
 *     lastName: 'Doe',
 *     email: 'john@example.com'
 *   },
 *   inputs: {
 *     revenue: 247000,
 *     grossMargin: 10,
 *     netMargin: 3,
 *     globalImpact: 1,
 *     currency: 'USD'
 *   },
 *   tableOneResults: {
 *     revenueIncrease: 28570.08,
 *     profitIncrease: 3024.77,
 *     strategyResults: [...]
 *   },
 *   deepDiveResults: null,
 *   tableOneStrategies: STRATEGIES_12,
 *   deepDiveStrategies: null,
 *   metadata: {
 *     ipAddress: '192.168.1.1',
 *     userAgent: 'Mozilla/5.0...'
 *   }
 * });
 */
export async function saveSimulation({
  userData,
  inputs,
  tableOneResults,
  deepDiveResults = null,
  tableOneStrategies,
  deepDiveStrategies = null,
  metadata = {},
}) {
  try {
    // Build Table One strategies JSON array
    const tableOneStrategyData = tableOneResults.strategyResults.map((result, index) => ({
      id: tableOneStrategies[index].id,
      name: tableOneStrategies[index].name,
      impact: tableOneStrategies[index].impact,
      profit_increase: result.profitIncrease,
    }));

    // Build Deep Dive strategies JSON array (if completed)
    const deepDiveStrategyData = deepDiveResults && deepDiveStrategies
      ? deepDiveResults.rows.map((result, index) => ({
          id: deepDiveStrategies[index].id,
          name: deepDiveStrategies[index].name,
          profit_increase: result.profitIncrease,
        }))
      : null;

    // Insert simulation (only essential data)
    const { data: simulation, error: simulationError } = await supabase
      .from('simulations')
      .insert({
        // User Information
        first_name: userData.firstName,
        last_name: userData.lastName,
        email: userData.email,

        // Input Values
        annual_revenue: inputs.revenue,
        gross_profit_margin: inputs.grossMargin,
        net_profit_margin: inputs.netMargin,
        global_impact: inputs.globalImpact,
        currency: inputs.currency || 'USD',

        // Table One Results
        table_one_revenue_increase: tableOneResults.revenueIncrease,
        table_one_profit_increase: tableOneResults.profitIncrease,
        table_one_strategies: tableOneStrategyData,

        // Deep Dive Results
        deep_dive_revenue_increase: deepDiveResults?.deepDiveRevenueIncrease || null,
        deep_dive_profit_increase: deepDiveResults?.deepDiveProfitIncrease || null,
        deep_dive_strategies: deepDiveStrategyData,

        // Metadata
        completed_deep_dive: !!deepDiveResults,
        ip_address: metadata.ipAddress || null,
        user_agent: metadata.userAgent || null,
      })
      .select()
      .single();

    if (simulationError) throw simulationError;

    return {
      success: true,
      simulation,
    };

  } catch (error) {
    console.error('Error saving simulation:', error);
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * Updates simulation with PDF report information
 *
 * @param {string} simulationId - UUID of the simulation to update
 * @param {string} filename - PDF filename stored in S3 (e.g., 'simulation_abc123_20250114.pdf')
 * @returns {Promise<{success: boolean, data?: Object, error?: string}>}
 *
 * @example
 * const result = await updateSimulationReport(
 *   '550e8400-e29b-41d4-a716-446655440000',
 *   'simulation_550e8400_20250114.pdf'
 * );
 */
export async function updateSimulationReport(simulationId, filename) {
  try {
    const { data, error } = await supabase
      .from('simulations')
      .update({
        report_filename: filename,
        report_generated_at: new Date().toISOString(),
      })
      .eq('id', simulationId)
      .select()
      .single();

    if (error) throw error;

    return { success: true, data };

  } catch (error) {
    console.error('Error updating simulation report:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Retrieves a simulation with all derived calculations
 *
 * @param {string} simulationId - UUID of the simulation to retrieve
 * @returns {Promise<{success: boolean, simulation?: Object, error?: string}>}
 *
 * @example
 * const { simulation } = await getSimulation('550e8400-e29b-41d4-a716-446655440000');
 * console.log(simulation.totalProfitIncrease); // Calculated field
 * console.log(simulation.table_one_strategies); // JSONB array
 */
export async function getSimulation(simulationId) {
  try {
    const { data: simulation, error } = await supabase
      .from('simulations')
      .select('*')
      .eq('id', simulationId)
      .single();

    if (error) throw error;

    // Calculate all derived values
    const enriched = enrichSimulationData(simulation);

    return {
      success: true,
      simulation: enriched,
    };

  } catch (error) {
    console.error('Error retrieving simulation:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Gets all simulations for an email address
 *
 * @param {string} email - User's email address
 * @returns {Promise<{success: boolean, simulations?: Array, error?: string}>}
 *
 * @example
 * const { simulations } = await getSimulationsByEmail('john@example.com');
 * simulations.forEach(sim => {
 *   console.log(`Created: ${sim.created_at}, Profit: ${sim.totalProfitIncrease}`);
 * });
 */
export async function getSimulationsByEmail(email) {
  try {
    const { data, error } = await supabase
      .from('simulations')
      .select('*')
      .eq('email', email)
      .order('created_at', { ascending: false });

    if (error) throw error;

    // Enrich each simulation with calculated values
    const enrichedSimulations = data.map(enrichSimulationData);

    return { success: true, simulations: enrichedSimulations };

  } catch (error) {
    console.error('Error retrieving simulations by email:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Helper function to calculate all derived values from stored data
 *
 * @private
 * @param {Object} simulation - Raw simulation data from database
 * @returns {Object} Simulation with all calculated/derived fields added
 */
function enrichSimulationData(simulation) {
  // Base calculations
  const currentProfit = simulation.annual_revenue * (simulation.net_profit_margin / 100);
  const currentRevenue = simulation.annual_revenue;

  // Table One derived values
  const tableOneFiveYear = simulation.table_one_profit_increase * 5;

  // Deep Dive derived values (handle null for non-deep-dive simulations)
  const deepDiveRevenueIncrease = simulation.deep_dive_revenue_increase || 0;
  const deepDiveProfitIncrease = simulation.deep_dive_profit_increase || 0;
  const deepDiveFiveYear = deepDiveProfitIncrease * 5;

  // Combined totals
  const totalRevenueIncrease = simulation.table_one_revenue_increase + deepDiveRevenueIncrease;
  const totalProfitIncrease = simulation.table_one_profit_increase + deepDiveProfitIncrease;
  const totalFiveYearImpact = totalProfitIncrease * 5;

  // New values
  const newAnnualProfit = currentProfit + totalProfitIncrease;
  const expectedRevenue = currentRevenue + totalRevenueIncrease;

  // Expected increases (for display)
  const expectedRevenueIncrease = totalRevenueIncrease;
  const expectedProfitIncrease = totalProfitIncrease;

  return {
    ...simulation,
    // Add all calculated fields
    currentProfit,
    currentRevenue,
    tableOneFiveYear,
    deepDiveFiveYear,
    totalRevenueIncrease,
    totalProfitIncrease,
    totalFiveYearImpact,
    newAnnualProfit,
    expectedRevenue,
    expectedRevenueIncrease,
    expectedProfitIncrease,
  };
}
