"use client";

import { useState, useMemo } from "react";
import SimulatorInputPanel from "@/components/simulator/SimulatorInputPanel";
import ImpactSlider from "@/components/simulator/ImpactSlider";
import StrategyTables from "@/components/simulator/StrategyTables";
import SimulatorResults from "@/components/simulator/SimulatorResults";
import { calculateResults } from "@/lib/calc/calculateResults";
import { STRATEGIES_12 } from "../../data/strategies";

export default function Simulator() {
  // Single source of truth for form inputs
  const [formData, setFormData] = useState({
    currency: "USD",
    revenue: 0,
    grossMargin: 0,
    netMargin: 0,
    globalImpact: 0,
    strategies: STRATEGIES_12.map((s) => ({ ...s, impact: 0 })),
  });

  // 1) Recalculate totals whenever inputs change
  const results = useMemo(() => calculateResults(formData), [formData]);

  // 2) Join per-row profit back onto the strategies we render in the table
  //    (id -> profitIncrease) map avoids O(n^2) lookups and ensures stable wiring.
  const strategiesWithResults = useMemo(() => {
    const mapById = Object.fromEntries(
      (results.strategyResults || []).map((r) => [r.id, r.profitIncrease])
    );

    return formData.strategies.map((s) => ({
      ...s,
      profitIncrease: mapById[s.id] || 0,
    }));
  }, [formData.strategies, results.strategyResults]);

  // --- handlers -------------------------------------------------------------

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Master slider: set globalImpact AND apply the same % to every row
  const handleSliderChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      globalImpact: value,
      strategies: prev.strategies.map((s) => ({ ...s, impact: value })),
    }));
  };

  // Per-row % change (keeps ordering semantics used by the legacy calc)
  const handleStrategyChange = (index, value) => {
    setFormData((prev) => ({
      ...prev,
      strategies: prev.strategies.map((s, i) =>
        i === index ? { ...s, impact: value } : s
      ),
    }));
  };

  // --- render ---------------------------------------------------------------

  return (
    <section id="simulator" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-h2-mobile md:text-h2-tablet lg:text-h2 font-bold text-navy text-center mb-12">
          Profit Acceleration Simulator
        </h2>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <SimulatorInputPanel formData={formData} onChange={handleInputChange} />

          <ImpactSlider
            value={formData.globalImpact}
            onChange={handleSliderChange}
            label="Set % Impact Across All Areas"
          />
        </div>

        <StrategyTables
          strategies={strategiesWithResults}
          onStrategyChange={handleStrategyChange}
          currency={formData.currency}
        />

        <SimulatorResults results={results} currency={formData.currency} />

        <div className="text-center">
          <button className="bg-navy text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-opacity-85 transition">
            SEND ME THE REPORT
          </button>
        </div>
      </div>
    </section>
  );
}
