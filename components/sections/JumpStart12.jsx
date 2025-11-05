import JumpStartGrid from "@/components/jumpstart12/JumpStartGrid";

export default function JumpStart12({ isReportPage }) {

  return (
    <section id="jumpstart-12" className="py-16 bg-light-gunmetal">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="mb-4 font-bold text-h2-mobile md:text-h2-tablet lg:text-h2 leading-h2 text-gray-900">
          The JumpStart 12 Operating System
          </h2>
          <p className="max-w-2xl mx-auto leading-relaxed text-gray-800 text-body mb-4">
          We've identified 12 core areas - the JumpStart 12 - that have the biggest impact on a business' bottom line. By focusing on these areas, you can create a powerful operating system to install in your business for sustainable, long-term growth.
          </p>

          {isReportPage && (
            <p className="max-w-2xl mx-auto leading-snug text-gray-800 text-body font-bold">
              Click any strategy below to jump to the action steps.
            </p>
          )}

      </div>

      {isReportPage ? (
        <JumpStartGrid isReportPage={true} enableLinks={true} />
      ) : (
        <JumpStartGrid />
      )}

      </div>
    </section>
  );
}
