/**
 * calculateResults - lib/calc/calculateResults.js
 *
 * Calculates profit acceleration results for the first 12 core growth strategies.
 *
 * Key principles:
 * - Revenue increases compound on cumulative revenue (not rounded during calculation)
 * - Profit amounts are rounded to integers with Math.round()
 * - Each strategy can have its own impact percentage (0-10%)
 * - Special cases: Cut Costs (expenses-based), Increase Prices (100% profit margin)
 */

export function calculateResults(formData) {
  const {
    revenue = 0,
    grossMargin = 0,
    netMargin = 0,
    strategies = [],
  } = formData;

  // Base calculations (unrounded)
  const grossRate = grossMargin / 100;
  const netRate = netMargin / 100;
  const netProfit = revenue * netRate;
  const overallExpenses = revenue - netProfit;

  // Cumulative revenue tracker - starts at annual revenue
  let cumulativeRevenue = revenue;

  // Accumulators
  let totalProfitImpact = 0;
  let totalRevenueIncrease = 0;
  const strategyResults = [];

  for (const s of strategies) {
    const impactRate = (s.impact || 0) / 100;

    if (impactRate <= 0) {
      strategyResults.push({
        id: s.id,
        profitIncrease: 0,
        revenueIncrease: 0
      });
      continue;
    }

    let revenueIncrease = 0;
    let profitIncrease = 0;

    // Strategy-specific calculations
    switch (s.id) {
      case 'cut-costs':
        // Special: No revenue increase, direct expense reduction
        revenueIncrease = 0;
        profitIncrease = Math.round(overallExpenses * impactRate);
        // cumulative revenue does NOT change
        break;

      case 'market-dominating-position':
        // Starts from original annual revenue
        revenueIncrease = revenue * impactRate;
        profitIncrease = Math.round(revenueIncrease * grossRate);
        cumulativeRevenue += revenueIncrease;
        break;

      case 'increase-prices':
        // Special: 100% profit margin (not gross margin)
        revenueIncrease = cumulativeRevenue * impactRate;
        profitIncrease = Math.round(revenueIncrease);
        cumulativeRevenue += revenueIncrease;
        break;

      default:
        // Standard calculation: compound on cumulative revenue
        // Applies to: Compelling Offer, Upsell & Cross-sell, Bundling, Downsell,
        // Additional Products & Services, Drip Campaign, Alliances & Joint Ventures,
        // More Leads, Digital Marketing
        revenueIncrease = cumulativeRevenue * impactRate;
        profitIncrease = Math.round(revenueIncrease * grossRate);
        cumulativeRevenue += revenueIncrease;
        break;
    }

    totalProfitImpact += profitIncrease;
    totalRevenueIncrease += revenueIncrease;

    strategyResults.push({
      id: s.id,
      profitIncrease,
      revenueIncrease
    });
  }

  // Final calculations
  return {
    currentRevenue: revenue,
    currentProfit: netProfit,
    revenueIncrease: totalRevenueIncrease,
    expectedRevenue: cumulativeRevenue,
    projectedFiveYearRevenueIncrease: totalRevenueIncrease * 5,
    profitIncrease: totalProfitImpact,
    newAnnualProfit: netProfit + totalProfitImpact,
    fiveYearImpact: totalProfitImpact * 5,
    strategyResults,
  };
}
