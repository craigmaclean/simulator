import Image from 'next/image';
import { getSimulation } from '@/lib/db/saveSimulation';
import { notFound } from 'next/navigation';
import StrategySection from '@/components/report/StrategySection';
import { STRATEGY_CONTENT } from '@/data/strategyContent';
import ReportJourney from '@/components/report/ReportJourney';
import ProfitPotential from '@/components/report/ProfitPotential';
import JumpStart12 from '@/components/sections/JumpStart12';
import DownloadReport from '@/components/report/DownloadReport';
import { formatCurrency } from '@/utils/formatters';

export default async function ReportPage({ params }) {
  const { id } = params;

  // Fetch simulation data from database
  const { simulation, error } = await getSimulation(id);

  if (error || !simulation) {
    notFound();
  }

  // Prepare all strategy data
  const strategiesWithContent = simulation.table_one_strategies.map((strategy) => {
    // Get video/action steps content
    const content = STRATEGY_CONTENT[strategy.id] || {
      cardTitle: strategy.name,
      actionSteps: `Here are your ${strategy.name.toLowerCase()} action steps:`,
      actionStepsList: [],
    };

    // Calculate base for profit percentage
    const grossProfit = simulation.annual_revenue * (simulation.gross_profit_margin / 100);
    const netProfit = simulation.annual_revenue * (simulation.net_profit_margin / 100);

    // Get cumulative profit from first 4 strategies for "Increase Prices"
    const cumulativeProfitForPricing = simulation.table_one_strategies
      .slice(0, 4) // First 4 strategies
      .reduce((sum, s) => sum + (s.profit_increase || 0), netProfit);

    let profitBase;
    if (strategy.id === 'cut-costs' ||
        strategy.id === 'market-dominating-position' ||
        strategy.id === 'compelling-offer') {
      profitBase = netProfit;
    } else if (strategy.id === 'increase-prices') {
      profitBase = cumulativeProfitForPricing; // net + first 3 strategies
    } else {
      profitBase = grossProfit;
    }

    return {
      id: strategy.id,
      ...content,
      // Keeping these as precise numbers, will format only when displaying
      revenueIncreasePercent: (strategy.revenue_increase / simulation.annual_revenue) * 100,
      revenueIncreaseAmount: strategy.revenue_increase,
      profitIncreasePercent: (strategy.profit_increase / profitBase) * 100,
      profitIncreaseAmount: strategy.profit_increase,
    };
  });

  return (
    <>
      <section id="report-header" className="py-12 md:py-16">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="mb-4 font-bold text-h1-mobile leading-12 md:leading-tight md:text-6xl tracking-tight text-gray-900">
              Your Profit Acceleration Roadmap
            </h1>

            <div className="grid items-center gap-10 md:grid-cols-[1fr_3fr]">
              <div className="hidden sm:inline w-1/2 md:w-full m-auto order-2 md:order-1">
                <Image
                  src="/roadmap.webp"
                  alt="Your Profit Acceleration Roadmap"
                  width={1200}
                  height={1552}
                  className="w-full rounded-lg"
                  layout="responsive"
                />
              </div>

              <div className="order-1 md:order-2 space-y-4">
                <p className="leading-relaxed text-gray-800 text-lg text-left">Thank you for providing the information needed to create your personalized Profit Acceleration Roadmap. Based on your input, the first twelve improvement areas highlight several opportunities to strengthen your business performance.</p>

                <p className="leading-relaxed text-gray-800 text-lg text-left">Below, you&apos;ll find recommended action steps designed to help you implement strategic changes and work toward the projected profit impact of {' '} <strong>{formatCurrency(simulation.totalProfitIncrease, simulation.currency)}</strong>. These steps can help you improve efficiencies, optimize operations, and support sustainable growth.</p>
              </div>
            </div>

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
          currency={simulation.currency}
        />
      ))}

      <DownloadReport simulation={simulation} />
    </>
  );
}
