"use client";

import React, { forwardRef, useMemo, useEffect } from "react";
import DeepDiveTables from "@/components/simulator/DeepDiveTables";
import { calculateResults } from "@/lib/calc/calculateResults";
import { calculateDeepDive } from "@/lib/calc/calculateDeepDive";
import { STRATEGIES_12, STRATEGIES_DEEPDIVE } from "@/data/strategies";
import CtaButton from "../shared/CtaButton";

const DeepDive40 = forwardRef(function DeepDive40(
  { show, currency, revenue, grossMargin, netMargin, globalImpact, onDeepDiveResults, onOpenReport = () => {} },
  ref
) {
  if (!show) return null;

  // First, calculate Table One results to get the revenue increase
  const tableOneResults = useMemo(
    () => {
      const result = calculateResults({
        revenue,
        grossMargin,
        netMargin,
        strategies: STRATEGIES_12.map(s => ({ ...s, impact: globalImpact || 0 })),
      });

      return result;
    },
    [revenue, grossMargin, netMargin, globalImpact]
  );

  const deepDive = useMemo(
    () => calculateDeepDive({
        revenue: revenue,
        tableOneRevenueIncrease: tableOneResults.revenueIncrease,
        grossMargin,
        netMargin,
        globalImpact,
        strategies: STRATEGIES_DEEPDIVE,
    }),
    [revenue, tableOneResults.revenueIncrease, grossMargin, netMargin, globalImpact]
  );

  // pass results to parent in useEffect
  useEffect(() => {
    if (onDeepDiveResults && deepDive) {
      onDeepDiveResults(deepDive);
    }
  }, [deepDive, onDeepDiveResults]);

    // Display calculations
    const expectedRevenueIncrease = deepDive.deepDiveRevenueIncrease;
    const expectedNetProfitIncrease = tableOneResults.profitIncrease + deepDive.deepDiveProfitIncrease;
    const expectedFiveYearImpact = expectedNetProfitIncrease * 5;
    const newAnnualProfit = tableOneResults.currentProfit + expectedNetProfitIncrease;

  // Combined totals for display
  const deepDiveRevenueIncrease = deepDive.deepDiveRevenueIncrease;
  const combinedProfitIncrease = tableOneResults.profitIncrease + deepDive.deepDiveProfitIncrease;
  const combinedFiveYearImpact = combinedProfitIncrease * 5;

  return (
    <section
      ref={ref}
      id="deepDive40"
      className="py-16 bg-gray-50 scroll-mt-24"
    >
      <div className="px-4 mx-auto max-w-7xl">
        <h2 className="mb-8 font-bold text-center text-h2-mobile md:text-h2-tablet lg:text-h2 text-navy">
          Deep Dive 40 Areas of Impact
        </h2>

        {globalImpact != null && globalImpact > 0 && (
          <p className="max-w-2xl mx-auto leading-relaxed text-center text-gray-600 text-body">
            The profit increase values below are based on a <strong>{globalImpact}% impact</strong>.
          </p>
        )}

        <div className="p-8 bg-white rounded-lg shadow-lg">
          <DeepDiveTables rows={deepDive.rows} currency={currency} />
        </div>

        <div className="grid grid-cols-1 gap-6 my-8 md:grid-cols-3">
          <SummaryCard
            label="EXPECTED REVENUE INCREASE"
            value={deepDiveRevenueIncrease}
            currency={currency}
          />
          <SummaryCard
            label="NEW ANNUAL PROFIT"
            value={tableOneResults.currentProfit + combinedProfitIncrease}
            currency={currency}
          />
          <SummaryCard
            label="EXPECTED 5-YEAR NET PROFIT IMPACT"
            value={combinedFiveYearImpact}
            currency={currency}
          />
        </div>

        <div className="px-4 mx-auto max-w-7xl flex justify-center">
          <CtaButton
            onClick={onOpenReport}
            variant="primary"
            size="large"
          >
            Send Me the Report
          </CtaButton>
        </div>
      </div>
    </section>
  );
});

export default DeepDive40;

function SummaryCard({ label, value, currency }) {
  const symbols = { USD: "$", CAD: "CA$", EUR: "€", GBP: "£" };
  const symbol = symbols[currency] || "$";
  const display = `${symbol}${Math.round(value).toLocaleString("en-US")}`;
  return (
    <div className="p-6 text-center rounded-lg bg-light-gray transform transition duration-300 hover:scale-105">
      <h3 className="text-[1rem] font-semibold text-gray-600 mb-2 tracking-tight">
        {label}
      </h3>
      <p className="text-[2rem] font-semibold text-gray-900 tracking-wide">
        {display}
      </p>
    </div>
  );
}
