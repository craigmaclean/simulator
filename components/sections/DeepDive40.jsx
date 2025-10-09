"use client";

import React, { forwardRef, useMemo } from "react";
import DeepDiveTables from "@/components/simulator/DeepDiveTables";
import { calculateDeepDive } from "@/lib/calc/calculateDeepDive";
import { STRATEGIES_DEEPDIVE } from "@/data/strategies";

const DeepDive40 = forwardRef(function DeepDive40(
  { show, currency, revenue, grossMargin, netMargin, globalImpact },
  ref
) {
  if (!show) return null;

  const deepDive = useMemo(
    () =>
      calculateDeepDive({
        revenue,
        grossMargin,
        netMargin,
        impact: globalImpact,
        strategies: STRATEGIES_DEEPDIVE,
      }),
    [revenue, grossMargin, netMargin, globalImpact]
  );

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

        { globalImpact != null && globalImpact > 0 && (
            <p className="max-w-2xl mx-auto leading-relaxed text-center text-gray-600 text-body">
        The profit increase values below are based on a <strong>{globalImpact}% impact</strong>.
        </p>
        )}

        <div className="p-8 bg-white rounded-lg shadow-lg">
          <DeepDiveTables rows={deepDive.rows} currency={currency} />
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
          <SummaryCard
            label="EXPECTED REVENUE INCREASE"
            value={deepDive.revenueIncrease}
            currency={currency}
          />
          <SummaryCard
            label="EXPECTED NET PROFIT INCREASE"
            value={deepDive.profitIncrease}
            currency={currency}
          />
          <SummaryCard
            label="EXPECTED 5-YEAR NET PROFIT IMPACT"
            value={deepDive.fiveYearImpact}
            currency={currency}
          />
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
    <div className="p-6 text-center rounded-lg bg-light-gray">
      <h3 className="text-[1rem] font-semibold text-gray-600 mb-2 tracking-tight">
        {label}
      </h3>
      <p className="text-[2rem] font-semibold text-navy tracking-wide">
        {display}
      </p>
    </div>
  );
}
