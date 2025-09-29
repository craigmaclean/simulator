import SimulatorResult from '@/components/simulator/SimulatorResult';
import { formatCurrency } from '../../utils/formatters';

export default function SimulatorResults({ results, currency }) {
  const resultItems = [
    { label: 'CURRENT REVENUE', value: formatCurrency(results.currentRevenue, currency) },
    { label: 'CURRENT PROFIT', value: formatCurrency(results.currentProfit, currency) },
    { label: 'EXPECTED REVENUE INCREASE', value: formatCurrency(results.revenueIncrease, currency) },
    { label: 'EXPECTED ANNUAL GROSS REVENUE', value: formatCurrency(results.expectedRevenue, currency) },
    { label: 'EXPECTED NET PROFIT INCREASE', value: formatCurrency(results.profitIncrease, currency) },
    { label: 'EXPECTED 5-YEAR NET PROFIT IMPACT', value: formatCurrency(results.fiveYearImpact, currency) }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {resultItems.map((item, index) => (
        <SimulatorResult key={index} label={item.label} value={item.value} />
      ))}
    </div>
  );
}
