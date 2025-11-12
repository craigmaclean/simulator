/**
 * Simulator - Client Component
 *
 * Contains the main simulator form, Strategy Tables, and Simulator Results - via child components.
 * Holds much of the form state.
 */

"use client";

import { useState, useMemo, useEffect } from "react";
import SimulatorInputPanel from "@/components/simulator/SimulatorInputPanel";
import ImpactSlider from "@/components/simulator/ImpactSlider";
import StrategyTables from "@/components/simulator/StrategyTables";
import SimulatorResults from "@/components/simulator/SimulatorResults";
import CtaButton from "@/components/shared/CtaButton";

import { calculateResults } from "@/lib/calc/calculateResults";

import { STRATEGIES_12 } from "@/data/strategies";

export default function Simulator({ onFormSnapshot, onCalculationResults, onOpenReport }) {

  // ---- shared simulator state ----
  const [formData, setFormData] = useState({
    currency: "USD",
    revenue: 0,
    grossMargin: 0,
    netMargin: 0,
    globalImpact: 0,
    strategies: STRATEGIES_12.map((s) => ({ ...s, impact: 0 })),
  });

  // ---- calculations ----
  const results = useMemo(() => calculateResults(formData), [formData]);

  useEffect(() => {
    if (onCalculationResults && results) {
      onCalculationResults((prev) => ({ ...prev, tableOne: results }));
    }
  }, [results, onCalculationResults]);

  const strategiesWithResults = useMemo(() => {
    const mapById = Object.fromEntries(
      (results.strategyResults || []).map((r) => [r.id, r.profitIncrease])
    );
    return formData.strategies.map((s) => ({
      ...s,
      profitIncrease: mapById[s.id] || 0,
    }));
  }, [formData.strategies, results.strategyResults]);

  // ---- handlers (unchanged) ----
  const handleInputChange = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSliderChange = (value) =>
    setFormData((prev) => ({
      ...prev,
      globalImpact: value,
      strategies: prev.strategies.map((s) => ({ ...s, impact: value })),
    }));

  const handleStrategyChange = (index, value) =>
    setFormData((prev) => ({
      ...prev,
      strategies: prev.strategies.map((s, i) =>
        i === index ? { ...s, impact: value } : s
      ),
    }));

  // Mirror limited fields upward if parent asked for it
  useEffect(() => {
    if (typeof onFormSnapshot === "function") {
      onFormSnapshot({
        currency: formData.currency,
        revenue: formData.revenue,
        grossMargin: formData.grossMargin,
        netMargin: formData.netMargin,
        globalImpact: formData.globalImpact,
      });
    }
  }, [
    formData.currency,
    formData.revenue,
    formData.grossMargin,
    formData.netMargin,
    formData.globalImpact,
    onFormSnapshot,
  ]);

  return (
    <section id="simulator" className="py-16">
      <div className="px-4 mx-auto max-w-7xl">
        <h2 className="mb-0 font-bold text-center leading-h2 text-h2-mobile md:text-h2-tablet lg:text-h2 text-gray-900 md:mb-0">
          Profit Acceleration Simulator
        </h2>

        <div className="p-8 mb-4 bg-white rounded-lg shadow-lg">
          <SimulatorInputPanel formData={formData} onChange={handleInputChange} />
          <ImpactSlider
            value={formData.globalImpact}
            onChange={handleSliderChange}
            label="Set % Impact Across All Areas"
            tooltipContent={
              <>
                <p className="font-semibold mb-2">If you want to double your profits, you may only need a 1.4% increase in each of the 12 areas.</p>
                <p>If you don't know your margins, use 50% for gross margin and 10% for net margin.</p>
              </>
            }
/>
        </div>

        <StrategyTables
          strategies={strategiesWithResults}
          onStrategyChange={handleStrategyChange}
          currency={formData.currency}
        />

        <SimulatorResults results={results} currency={formData.currency} />

        <div className="mt-8 text-center">
          <CtaButton onClick={onOpenReport} variant="primary" className="px-8 py-4 text-lg font-semibold transition hover:bg-opacity-85">
            Send Me the Report
          </CtaButton>
        </div>
      </div>

    </section>
  );
}
