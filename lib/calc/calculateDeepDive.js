// lib/calc/calculateDeepDive.js

/**
 * Calculates profit acceleration results for the 28 Deep Dive growth strategies.
 *
 * Key principles:
 * - All Deep Dive strategies use the SAME global impact percentage (not individual overrides)
 * - Starting base = Annual Revenue + Table One revenue increase
 * - Each item compounds on: Annual Revenue + Table One total + sum of all previous Deep Dive revenues
 * - Revenue increases are NOT rounded during calculation
 * - Profit amounts are rounded to integers with Math.round()
 */

export function calculateDeepDive({
  revenue = 0,
  tableOneRevenueIncrease = 0,
  grossMargin = 0,
  netMargin = 0,
  globalImpact,
  impact,
  strategies = [],
}) {
  const grossRate = grossMargin / 100;
  const netRate = netMargin / 100;

  // Use globalImpact if provided, otherwise fall back to impact
  const impactRate = ((globalImpact ?? impact) || 0) / 100;

  if (revenue <= 0 || grossRate <= 0 || impactRate <= 0) {
    return {
      rows: strategies.map(s => ({
        id: s.id,
        name: s.name,
        profitIncrease: 0,
        revenueIncrease: 0
      })),
      deepDiveRevenueIncrease: 0,
      deepDiveProfitIncrease: 0,
      deepDiveFiveYearImpact: 0,
      finalCumulativeRevenue: revenue,
    };
  }

  // Track the sum of all Deep Dive revenue increases (starts at 0)
  let sumOfDeepDiveIncreases = 0;

  const rows = [];
  let totalProfitIncrease = 0;
  let totalRevenueIncrease = 0;

  // Each Deep Dive item calculates from:
  // (Annual Revenue + Table One Total + All Previous Deep Dive Revenues) × Impact
  for (const s of strategies) {
    const base = revenue + tableOneRevenueIncrease + sumOfDeepDiveIncreases;
    const revenueIncrease = base * impactRate;
    const profitIncrease = Math.round(revenueIncrease * grossRate);

    rows.push({
      id: s.id,
      name: s.name,
      profitIncrease,
      revenueIncrease
    });

    totalProfitIncrease += profitIncrease;
    totalRevenueIncrease += revenueIncrease;
    sumOfDeepDiveIncreases += revenueIncrease;
  }

  const finalCumulativeRevenue = revenue + tableOneRevenueIncrease + sumOfDeepDiveIncreases;
  const fiveYearImpact = totalProfitIncrease * 5;

  return {
    rows,
    deepDiveRevenueIncrease: totalRevenueIncrease,
    deepDiveProfitIncrease: totalProfitIncrease,
    deepDiveFiveYearImpact: fiveYearImpact,
    finalCumulativeRevenue,
  };
}
