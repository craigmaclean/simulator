// lib/calc/calculateResults.js

/**
 * Legacy-aligned calculations for the Profit Acceleration Simulator.
 *
 * TABLE ROWS (the dollar amounts per strategy):
 * - We maintain a "gross profit base" that starts at: revenue * grossRate.
 * - Row amounts are computed in this order:
 *    • Cut Costs ............: revenue * impact * (1 - netRate)          (base does NOT change)
 *    • Increase Prices ......: price delta (revenue * impact)
 *                               + small revenue lift gross (revenue * (impact * 0.2) * grossRate)
 *                               Then: bump the base by exactly +impact (1% when slider=1).
 *    • All other rows .......: base * impact
 *                               Then: bump the base by exactly +impact (1% when slider=1).
 *
 * IMPORTANT: Each row amount is ROUNDED before being added to the total.
 *
 * This reproduces the sequence you see in the legacy sim:
 *   950, 100, 101, 1020, 103, 104, 105, 106, 107, 108, 109, 110
 *
 * CARDS:
 * - We infer expected revenue from the final gross base:
 *     gross = revenue * grossRate  =>  revenue = gross / grossRate
 * - Net profit increase is the sum of all ROUNDED table rows.
 * - 5-Year impact is: (rounded profit increase) * 5
 */

export function calculateResults(formData) {
  const {
    revenue = 0,
    grossMargin = 0,
    netMargin = 0,
    strategies = [],
  } = formData;

  const grossRate = (grossMargin || 0) / 100;
  const netRate   = (netMargin   || 0) / 100;

  // Starting gross profit base
  const startGross = revenue * grossRate;
  let grossBase = startGross;

  let totalRowSum = 0;
  const strategyResults = [];

  const asPct = (v) => (Number.isFinite(v) ? v : 0) / 100;

  for (const s of strategies) {
    const impact = asPct(s.impact); // e.g., 0.01 when 1%

    if (impact <= 0) {
      strategyResults.push({ id: s.id, profitIncrease: 0 });
      continue;
    }

    // 1) CUT COSTS — net savings; base does NOT change
    if (s.id === 'cut-costs') {
      const row = revenue * impact * (1 - netRate);
      const rowRounded = Math.round(row);
      totalRowSum += rowRounded;
      strategyResults.push({ id: s.id, profitIncrease: rowRounded });
      continue;
    }

    // 2) INCREASE PRICES — special row math, then bump base by +impact
    if (s.id === 'increase-prices') {
      const priceDelta = revenue * impact; // full profit from price change
      // small revenue lift of 0.2 -> contributes gross portion only
      const smallLiftGross = revenue * (impact * 0.2) * grossRate;
      const row = priceDelta + smallLiftGross; // e.g., 1,020 at 1%/10%/5%
      const rowRounded = Math.round(row);
      totalRowSum += rowRounded;

      // bump base by the exact impact (1%) to match legacy increments
      grossBase *= (1 + impact);

      strategyResults.push({ id: s.id, profitIncrease: rowRounded });
      continue;
    }

    // 3) DEFAULT ROWS — amount is 1% of current base, then bump base by +impact
    const row = grossBase * impact;
    const rowRounded = Math.round(row);
    totalRowSum += rowRounded;
    grossBase *= (1 + impact);

    strategyResults.push({ id: s.id, profitIncrease: rowRounded });
  }

  // From final gross base, infer expected revenue (avoid div-by-zero)
  const expectedRevenue = grossRate > 0 ? (grossBase / grossRate) : revenue;
  const revenueIncrease = expectedRevenue - revenue;

  // Net profit increase is the sum of all ROUNDED table rows
  const profitIncrease = totalRowSum;

  // 5-Year impact: already-rounded profit * 5
  const fiveYearImpact = profitIncrease * 5;

  return {
    currentRevenue: revenue,
    currentProfit: revenue * netRate,
    revenueIncrease,
    expectedRevenue,
    profitIncrease,
    fiveYearImpact,
    strategyResults,
  };
}
