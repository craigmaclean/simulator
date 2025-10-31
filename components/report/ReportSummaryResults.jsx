"use client";

import SimulatorResult from '@/components/simulator/SimulatorResult';
import { formatCurrency } from '@/utils/formatters';

export default function ReportSummaryResults({ tableOneResults, deepDiveResults, currency }) {
  // First two rows (always shown)
  const tableOneItems = [
    { label: 'CURRENT REVENUE', value: formatCurrency(tableOneResults.currentRevenue, currency) },
    { label: 'CURRENT PROFIT', value: formatCurrency(tableOneResults.currentProfit, currency) },
    { label: 'EXPECTED REVENUE INCREASE', value: formatCurrency(tableOneResults.revenueIncrease, currency) },
    { label: 'EXPECTED ANNUAL GROSS REVENUE', value: formatCurrency(tableOneResults.grossRevenueIncrease, currency) },
    { label: 'EXPECTED NET PROFIT INCREASE', value: formatCurrency(tableOneResults.netProfitIncrease, currency) },
    { label: 'EXPECTED 5-YEAR NET PROFIT IMPACT', value: formatCurrency(tableOneResults.fiveYearImpact, currency) }
  ];

  // Third row (only if deep dive exists)
  const deepDiveItems = deepDiveResults ? [
    { label: 'EXPECTED REVENUE INCREASE', value: formatCurrency(deepDiveResults.deepDiveRevenueIncrease, currency) },
    { label: 'NEW ANNUAL PROFIT', value: formatCurrency(deepDiveResults.newAnnualProfit, currency) },
    { label: 'EXPECTED 5-YEAR NET PROFIT IMPACT', value: formatCurrency(deepDiveResults.deepDiveFiveYearImpact, currency) }
  ] : [];

  return (
    <div className="space-y-6">
      {/* Table One Results - 2 rows */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tableOneItems.map((item, index) => (
          <SimulatorResult key={index} label={item.label} value={item.value} />
        ))}
      </div>

      {/* Deep Dive Results - 3rd row (conditional) */}
      {deepDiveResults && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deepDiveItems.map((item, index) => (
            <SimulatorResult key={index} label={item.label} value={item.value} />
          ))}
        </div>
      )}
    </div>
  );
}
