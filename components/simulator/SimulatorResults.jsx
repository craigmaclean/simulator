"use client";

import SimulatorResult from '@/components/simulator/SimulatorResult';
import { formatCurrency } from '../../utils/formatters';

export default function SimulatorResults({ results, currency }) {
  const resultItems = [
    { label: 'CURRENT REVENUE', value: formatCurrency(results.currentRevenue, currency) },
    { label: 'PROJECTED REVENUE INCREASE', value: formatCurrency(results.revenueIncrease, currency) },
    { label: 'PROJECTED 5-YEAR REVENUE INCREASE', value: formatCurrency(results.projectedFiveYearRevenueIncrease, currency) },
    { label: 'CURRENT NET PROFIT', value: formatCurrency(results.currentProfit, currency) },
    { label: 'PROJECTED PROFIT INCREASE', value: formatCurrency(results.profitIncrease, currency) },
    { label: 'PROJECTED 5-YEAR NET PROFIT INCREASE', value: formatCurrency(results.fiveYearImpact, currency) }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {resultItems.map((item, index) => (
        <SimulatorResult key={index} label={item.label} value={item.value} />
      ))}
    </div>
  );
}
