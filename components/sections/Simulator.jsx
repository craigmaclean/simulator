"use client";

import { useState, useMemo } from 'react';
import SimulatorInputPanel from '@/components/simulator/SimulatorInputPanel';
import ImpactSlider from '@/components/simulator/ImpactSlider';
import StrategyTables from '@/components/simulator/StrategyTables';
import SimulatorResults from '@/components/simulator/SimulatorResults';
import { calculateResults } from '../../utils/calculations';
import { STRATEGIES_12 } from '../../data/strategies';

export default function Simulator() {
  const [formData, setFormData] = useState({
    currency: 'USD',
    revenue: 0,
    grossMargin: 0,
    netMargin: 0,
    globalImpact: 0,
    strategies: STRATEGIES_12.map(s => ({ ...s, impact: 0 }))
  });

  const results = useMemo(() =>
    calculateResults(formData),
    [formData]
  );

  const strategiesWithResults = formData.strategies.map(strategy => {
    const result = results.strategyResults.find(r => r.id === strategy.id);
    return {
      ...strategy,
      profitIncrease: result ? result.profitIncrease : 0
    };
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSliderChange = (value) => {
    setFormData(prev => ({
      ...prev,
      globalImpact: value,
      strategies: prev.strategies.map(s => ({ ...s, impact: value }))
    }));
  };

  const handleStrategyChange = (index, value) => {
    setFormData(prev => ({
      ...prev,
      strategies: prev.strategies.map((s, i) =>
        i === index ? { ...s, impact: value } : s
      )
    }));
  };

  return (
    <section id="simulator" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-h2-mobile md:text-h2-tablet lg:text-h2 font-bold text-navy text-center mb-12">
          Profit Acceleration Simulator
        </h2>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <SimulatorInputPanel
            formData={formData}
            onChange={handleInputChange}
          />

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

        <SimulatorResults
          results={results}
          currency={formData.currency}
        />

        <div className="text-center">
          <button className="bg-navy text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-opacity-85 transition">
            SEND ME THE REPORT
          </button>
        </div>
      </div>
    </section>
  );
}
