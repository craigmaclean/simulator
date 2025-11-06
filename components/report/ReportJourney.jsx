import Image from 'next/image';

export default function ReportJourney() {
  return (
    <section id="report-journey" className="py-16 bg-light-gray">
      <div className="px-4 mx-auto max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-[3fr_1fr]">
          <div className="order-1">
            <h2 className="mb-6 font-bold text-center md:text-left text-h2-mobile md:text-h2-tablet lg:text-h2 leading-h2 text-gray-900">
              Your Journey to Profit Acceleration!
            </h2>
            <div className="space-y-4">
              <p className="leading-relaxed text-gray-800 text-body">
                First of all, bookmark this page. You can come back to it at anytime. Your results are customized for you.
                And if you&apos;d like help with any strategy, click the link to book a meeting.
              </p>
              <p className="leading-relaxed text-gray-800 text-body">
                The purpose of this roadmap is to give an overview of the path to take in order to create the maximum amount
                of revenue and profits in your company in the shortest time possible. I&apos;ll also show you some (very) short
                videos along the way to guide your understanding.
              </p>
              <p className="leading-relaxed text-gray-800 text-body font-bold">
                I&apos;ll outline major strategies you should follow and the impact to be made. Click on the strategies below to jump to the step.
              </p>
              <p className="leading-relaxed text-gray-800 text-body italic">
                - [COACH NAME], Your Profit Acceleration Specialist
              </p>
            </div>
          </div>

          <div className="hidden sm:inline order-2 w-1/2 md:w-full m-auto">
            <Image
              src="/compass.webp"
              alt="Your Journey to Profit Acceleration"
              width={1200}
              height={1552}
              className="w-full rounded-lg"
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
