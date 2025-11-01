import { getSimulation } from '@/lib/db/saveSimulation';
import { notFound } from 'next/navigation';
import StrategySection from '@/components/report/StrategySection';
import { STRATEGY_CONTENT } from '@/data/strategyContent';
import ReportJourney from '@/components/report/ReportJourney';
import ProfitPotential from '@/components/report/ProfitPotential';
import JumpStart12 from '@/components/sections/JumpStart12';
import DownloadReport from '@/components/report/DownloadReport';

export default async function ReportPage({ params }) {
  const { id } = params;

  // Fetch simulation data from database
  const { simulation, error } = await getSimulation(id);

  if (error || !simulation) {
    notFound();
  }

  const formatCurrency = (value) => {
    const symbols = { USD: '$', CAD: 'CA$', EUR: '€', GBP: '£' };
    const symbol = symbols[simulation.currency] || '$';
    return `${symbol}${Math.round(value).toLocaleString('en-US')}`;
  };

  // Prepare all strategy data
  const strategiesWithContent = simulation.table_one_strategies.map((strategy) => {
    // Get video/action steps content
    const content = STRATEGY_CONTENT[strategy.id] || {
      cardTitle: strategy.name,
      actionSteps: `Here are your ${strategy.name.toLowerCase()} action steps:`,
      actionStepsList: [],
    };

    return {
      id: strategy.id,
      ...content,
      revenueIncrease: `${((strategy.profit_increase / simulation.annual_revenue) * 100).toFixed(1)}% / ${formatCurrency(strategy.profit_increase)}`,
      profitIncrease: `${((strategy.profit_increase / simulation.currentProfit) * 100).toFixed(1)}% / ${formatCurrency(strategy.profit_increase)}`,
    };
  });

  return (
    <>
      <section id="report-header" className="py-16">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="mb-4 font-bold text-h1-mobile leading-12 md:leading-tight md:text-6xl tracking-tight text-navy">
              Your Profit Acceleration Roadmap
            </h1>
            <p className="max-w-5xl mx-auto leading-relaxed text-gray-600 text-lg">
              Thank you for your input to help me create this Profit Acceleration Roadmap for you.
              Below are some action steps you can take to implement the necessary changes so you can hit that{' '}
              <strong>{formatCurrency(simulation.totalProfitIncrease)}</strong> profit impact over the first 12 areas.
            </p>
          </div>
        </div>
      </section>

      <ReportJourney />

      <ProfitPotential simulation={simulation} />

      <JumpStart12 isReportPage={true} enableLinks={true} />

      {/* Render all strategies with alternating layouts */}
      {strategiesWithContent.map((strategy, index) => (
        <StrategySection
          key={index}
          strategyData={strategy}
          isReversed={index % 2 !== 0}
        />
      ))}

      <DownloadReport />
    </>
  );
}
