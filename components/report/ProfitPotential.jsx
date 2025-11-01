import ReportSummaryResults from './ReportSummaryResults';

export default function ProfitPotential({ simulation }) {

  // ✅ DEBUG: See what's actually in simulation
  console.log('Full simulation object:', simulation);
  console.log('Keys:', Object.keys(simulation));
  // Prepare table one summary data
  const tableOneResults = {
    currentRevenue: simulation.currentRevenue,
    currentProfit: simulation.currentProfit,
    revenueIncrease: simulation.table_one_revenue_increase,
    grossRevenueIncrease: simulation.expectedRevenue,
    netProfitIncrease: simulation.table_one_profit_increase,
    fiveYearImpact: simulation.tableOneFiveYear,
  };

  // Check if deep dive exists and prepare data
  const hasDeepDive = simulation.completed_deep_dive && simulation.deep_dive_profit_increase;

  const deepDiveResults = hasDeepDive ? {
    deepDiveRevenueIncrease: simulation.deep_dive_revenue_increase,
    newAnnualProfit: simulation.currentProfit + simulation.table_one_profit_increase + simulation.deep_dive_profit_increase,
    deepDiveFiveYearImpact: (simulation.table_one_profit_increase + simulation.deep_dive_profit_increase) * 5,
  } : null;

  return (
    <section id="report-profit-potential" className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-6xl">
        <div className="grid items-center gap-10">
            <h2 className="mb-2 font-bold text-center text-h2-mobile md:text-h2-tablet lg:text-h2 leading-h2 text-navy">
              Your Customized Profit Potential
            </h2>

            <ReportSummaryResults
              tableOneResults={tableOneResults}
              deepDiveResults={deepDiveResults}
              currency={simulation.currency}
            />
        </div>
      </div>
    </section>
  );
}
