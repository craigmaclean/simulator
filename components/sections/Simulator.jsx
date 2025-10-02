"use client";

import { useState, useMemo, useEffect } from "react";
import SimulatorInputPanel from "@/components/simulator/SimulatorInputPanel";
import ImpactSlider from "@/components/simulator/ImpactSlider";
import StrategyTables from "@/components/simulator/StrategyTables";
import SimulatorResults from "@/components/simulator/SimulatorResults";
import DeepDive40 from "@/components/sections/DeepDive40";

import { calculateResults } from "@/lib/calc/calculateResults";
import { calculateDeepDive } from "@/lib/calc/calculateDeepDive";

import { STRATEGIES_12, STRATEGIES_DEEPDIVE } from "@/data/strategies";

export default function Simulator({ onFormSnapshot }) {

    const [formData, setFormData] = useState({
    currency: "USD",
    revenue: 0,
    grossMargin: 0,
    netMargin: 0,
    globalImpact: 0,
    strategies: STRATEGIES_12.map((s) => ({ ...s, impact: 0 })),
  });

  // Legacy 12-row calculations
  const results = useMemo(() => calculateResults(formData), [formData]);

  const strategiesWithResults = useMemo(() => {
    const mapById = Object.fromEntries(
      (results.strategyResults || []).map((r) => [r.id, r.profitIncrease])
    );
    return formData.strategies.map((s) => ({
      ...s,
      profitIncrease: mapById[s.id] || 0,
    }));
  }, [formData.strategies, results.strategyResults]);

  // Handlers
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


    // NEW: mirror the fields Deep Dive needs up to the parent
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

        <DeepDive40
            currency={formData.currency}
            revenue={formData.revenue}
            grossMargin={formData.grossMargin}
            netMargin={formData.netMargin}
            globalImpact={formData.globalImpact}
        />

        <div className="text-center mt-8">
          <button className="bg-navy text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-opacity-85 transition">
            SEND ME THE REPORT
          </button>
        </div>
      </div>
    </section>
  );
}
