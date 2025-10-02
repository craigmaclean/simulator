// lib/calc/calculateDeepDive.js

/**
 * Deep Dive continues from the legacy 12-row sequence.
 * Before Deep Dive, the gross base has already been bumped 11 times
 * (every row except “Cut Costs”).
 *
 * Starting base for Deep Dive:
 *   base = revenue * grossRate * (1 + p)^(11)
 *
 * For each Deep Dive row:
 *   amount = round(base * p)
 *   base   = base * (1 + p)
 */
export function calculateDeepDive({
  revenue = 0,
  grossMargin = 0,
  netMargin = 0,
  globalImpact,       // preferred (same as main slider)
  impact,             // backward-compat fallback
  strategies = [],    // STRATEGIES_DEEPDIVE (28 items)
}) {
  const grossRate = (Number(grossMargin) || 0) / 100;
  const netRate   = (Number(netMargin)   || 0) / 100;

  // prefer globalImpact, fall back to impact
  const rawPct = (globalImpact ?? impact ?? 0);
  const p = (Number(rawPct) || 0) / 100;

  // If inputs aren’t usable, return zeros
  if (revenue <= 0 || grossRate <= 0 || p <= 0) {
    return {
      rows: strategies.map(s => ({ id: s.id, name: s.name, profitIncrease: 0 })),
      currentRevenue: revenue,
      currentProfit: revenue * netRate,
      expectedRevenue: revenue,
      revenueIncrease: 0,
      profitIncrease: 0,
      fiveYearImpact: 0,
    };
  }

  // Base after the first 12 rows (11 bumps; "Cut Costs" doesn't bump)
  let base = revenue * grossRate * Math.pow(1 + p, 11);

  const rows = [];
  let total = 0;

  for (const s of strategies) {
    const amt = Math.round(base * p);
    rows.push({ id: s.id, name: s.name, profitIncrease: amt });
    total += amt;
    base *= (1 + p); // bump for next row
  }

  // Infer revenue from final gross base
  const expectedRevenue = base / grossRate;
  const revenueIncrease = expectedRevenue - revenue;
  const profitIncrease  = total;
  const fiveYearImpact  = profitIncrease * 5;

  return {
    rows,
    currentRevenue: revenue,
    currentProfit: revenue * netRate,
    expectedRevenue,
    revenueIncrease,
    profitIncrease,
    fiveYearImpact,
  };
}
