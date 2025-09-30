// lib/calc/calculateResults.js

/**
 * ------------------------------------------------
 * A "strategy" row represents a lever the user can adjust with an % impact.
 * Each lever can influence:
 *   - Top-line revenue (compounds with other revenue levers)
 *   - Profit directly (adds to profit without compounding)
 *
 * We keep BOTH margin inputs:
 *   - grossMargin: only used to report currentGrossProfit (for display/other features)
 *   - netMargin:   used to translate revenue lift into profit
 *
 * STRATEGY SHAPE (old schema):
 * {
 *   id: string,                 // stable identifier (used to reattach per-row results)
 *   name: string,               // label for display
 *   impact: number,             // user-entered % (e.g., 0–10)
 *   revenueMultiplier: number,  // weight of the impact on revenue  (0 = none)
 *   profitMultiplier: number    // weight of the impact on profit   (0 = none)
 * }
 *
 * EXAMPLE:
 *   // "Increase Prices" modeled as a revenue lever
 *   { id:'increase-prices', name:'Increase Prices', impact: 2, revenueMultiplier: 1, profitMultiplier: 0 }
 *
 *   // "Cut Costs" modeled as a direct profit lever
 *   { id:'cut-costs', name:'Cut Costs', impact: 1.5, revenueMultiplier: 0, profitMultiplier: 1 }
 *
 * NOTES:
 * - Revenue effects COMPOUND: revenueFactor *= (1 + impact% * revenueMultiplier)
 * - Direct profit effects ADD: totalProfitIncrease += (currentProfit * impact% * profitMultiplier)
 * - Profit from revenue lift is computed at the END using net margin.
 * - We return per-row "profitIncrease" (isolated) for table display, keyed by strategy id.
 */

/**
 * @typedef {Object} Strategy
 * @property {string} id
 * @property {string} name
 * @property {number} impact             // percent, e.g. 0..10
 * @property {number} revenueMultiplier  // weight toward revenue effect
 * @property {number} profitMultiplier   // weight toward profit effect
 */

/**
 * @typedef {Object} FormData
 * @property {number} revenue
 * @property {number} grossMargin        // percent, 0..100
 * @property {number} netMargin          // percent, 0..100
 * @property {Strategy[]} strategies
 */

/**
 * Calculates simulator results from formData using the OLD schema.
 * Returns NUMBERS ONLY — currency formatting should happen in the UI layer.
 *
 * @param {FormData} formData
 * @returns {{
 *   currentRevenue: number,
 *   currentGrossProfit: number,
 *   currentProfit: number,
 *   revenueIncrease: number,
 *   expectedRevenue: number,
 *   profitIncrease: number,
 *   expectedProfit: number,
 *   fiveYearImpact: number,
 *   strategyResults: Array<{ id: string|null, profitIncrease: number }>
 * }}
 */
export function calculateResults(formData) {
  // --- 1) Normalize inputs (coerce to numbers; treat invalids as 0)
  const revenue    = Number(formData?.revenue)      || 0;
  const grossPct   = (Number(formData?.grossMargin) || 0) / 100; // 0..1
  const netPct     = (Number(formData?.netMargin)   || 0) / 100; // 0..1
  const strategies = Array.isArray(formData?.strategies) ? formData.strategies : [];

  // Baselines derived from inputs
  const currentGrossProfit = revenue * grossPct; // not used in math below, but useful for UI / future levers
  const currentProfit      = revenue * netPct;   // base for direct profit adds

  // --- 2) Accumulators for totals
  let revenueMultiplierTotal = 1;  // compounding multiplier from all revenue-type effects
  let totalProfitIncrease    = 0;  // additive sum of direct profit effects

  // Per-row results for the table (isolated effect by row)
  const strategyResults = strategies.map((s) => {
    const impactPct = (Number(s?.impact) || 0) / 100; // convert % to decimal
    const revMul    = Number(s?.revenueMultiplier) || 0;
    const profMul   = Number(s?.profitMultiplier)  || 0;

    // --- 2a) Compound any revenue effect into the top-line factor
    // If this row has a revenue effect, it increases the top-line compounding factor.
    // Example: 2% impact * 1.0 revMul => factor *= 1.02
    if (revMul > 0 && impactPct > 0) {
      revenueMultiplierTotal *= (1 + impactPct * revMul);
    }

    // --- 2b) Compute this row's DIRECT profit add (non-compounding)
    //   Based on CURRENT NET profit (per your original model).
    //   If you ever want to base certain rows on GROSS profit instead,
    //   this is the single place you would change the base.
    const rowProfitIncrease = currentProfit * (impactPct * profMul);
    totalProfitIncrease    += rowProfitIncrease;

    return {
      id: s?.id ?? null,
      profitIncrease: rowProfitIncrease, // isolated per-row number for table display
    };
  });

  // --- 3) Derive totals after walking all strategies
  const newRevenue           = revenue * revenueMultiplierTotal;
  const revenueIncrease      = newRevenue - revenue;

  // Profit gained *due to* higher revenue (uses NET margin)
  const profitFromNewRevenue = revenueIncrease * netPct;

  // Total profit lift = direct adds + profit from revenue lift
  const newProfit            = currentProfit + totalProfitIncrease + profitFromNewRevenue;
  const totalProfitLift      = newProfit - currentProfit;

  // --- 4) Return numbers only (keep formatting in the UI)
  return {
    // Current baselines (for KPI cards)
    currentRevenue: revenue,
    currentGrossProfit,
    currentProfit,

    // Revenue/profit lifts (for KPI cards)
    revenueIncrease,
    expectedRevenue: newRevenue,
    profitIncrease: totalProfitLift, // total net profit increase
    expectedProfit: newProfit,
    fiveYearImpact: totalProfitLift * 5, // simple 5× projection

    // Per-row isolated profit increases (aligned by id)
    strategyResults, // [{ id, profitIncrease }]
  };
}

/*
 * IMPLEMENTATION NOTES
 * --------------------
 * - Time complexity: O(n) over strategies — cheap even for 40+ rows.
 * - Input validation: We coerce to numbers here; UI should still clamp/validate inputs.
 * - Gross vs Net:
 *     - We report currentGrossProfit for display/future use.
 *     - All revenue-lift translation uses NET margin (typical for bottom-line impact).
 *     - Direct profit adds are based on CURRENT NET profit (per your original approach).
 * - Why "numbers only"?
 *     - Keeps calculation pure/testable; no i18n or currency symbols mixed in.
 *     - UI can format with your existing formatCurrency(value, currency).
 *
 * COMMON EXTENSIONS
 * -----------------
 * - If you need "per-row revenue increase" for display, capture isolated revDelta in the loop.
 * - If you want certain direct-profit levers to use GROSS profit base:
 *     const base = useGross ? currentGrossProfit : currentProfit;
 *     const rowProfitIncrease = base * (impactPct * profMul);
 */
