import JumpStartGrid from '@/components/jumpstart12/JumpStartGrid';
import StrategySection from '@/components/report/StrategySection';
import Image from 'next/image';

export default function ReportPage() {

  const strategySectionCutCosts = {
    title: "Cut Costs",
    actionSteps: "Here are your cost cutting action steps:",
    actionStepsList: [
      "Review the Video for Important Reasons Why Cutting Costs is Your Key to Increased Profits",
      "Dive Deeper into Possible Areas to Cut Costs",
      "Determine Best Practices",
      "Determine Your Method of Implementation",
      "Determine Your Cost Cutting Details",
      "Establish SOPs for Continuing Success",
    ],
    videoId: "1130049762",
    videoHash: "1cc3f06330",
    videoContainerText: "Learn About Cutting Costs"
  };

  return (
    <>
    <section id="report-header" className="py-16">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
            <h1 className="mb-4 font-bold text-h1-mobile md:text-6xl tracking-tight text-navy">
            Your Profit Acceleration Roadmap
            </h1>
            <p className="max-w-5xl mx-auto leading-relaxed text-gray-600 text-lg">
            Thank you for your input to help me create this Profit Acceleration Roadmap for you. Below are some action steps you can take to implement the necessary changes so you can hit that <strong>$30,533</strong> profit impact over the first 12 areas.
            </p>
        </div>
      </div>
    </section>{/* end #report-header */}


    <section id="report-journey" className="py-16 bg-light-blue">
      <div className="px-4 mx-auto max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-[3fr_1fr]">
            {/* Left Column - Image */}
            <div className="order-1">
              <h2 className="mb-6 font-bold text-center md:text-left text-h2-mobile md:text-h2-tablet lg:text-h2 leading-h2 text-navy">
                Your Journey to Profit Acceleration!
              </h2>
              <div className="space-y-4">
                  <p className="leading-relaxed text-gray-600 text-body">
                  First of all, bookmark this page. You can come back to it at anytime. Your results are customized for you. And if you'd like help with any strategy, click the link to book a meeting.
                  </p>

                  <p className="leading-relaxed text-gray-600 text-body">
                  The purpose of this roadmap is to give an overview of the path to take in order to create the maximum amount of revenue and profits in your company in the shortest time possible. I'll also show you some (very) short videos along the way to guide your understanding.
                  </p>

                  <p className="leading-relaxed text-gray-600 text-body font-bold">
                  I'll outline major strategies you should follow and the impact to be made. Click on the strategies below to jump to the step.
                  </p>

                  <p className="leading-relaxed text-gray-600 text-body italic">
                  - Karl Bryan, Your Profit Acceleration Specialist
                  </p>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="order-2">
              <Image
                src="/sbbm-magazine-cover.webp"
                alt="Your Journey to Profit Acceleration"
                width={1200}
                height={1552}
                className="w-full rounded-lg"
                layout="responsive"
              />
            </div>
        </div>
      </div>
    </section>{/* end #report-journey */}

    <StrategySection strategyData={strategySectionCutCosts} />


    </>
  );
}
