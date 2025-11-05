import { CircleArrowDown, CircleCheck } from 'lucide-react';
import ReportButton from "./ReportButton";

export default function StrategySection({ strategyData, isReversed = false }) {
  const {
    id,
    strategySectionTitle,
    actionSteps,
    actionStepsList,
    videoId,
    videoHash,
    videoContainerText,
    revenueIncrease,
    profitIncrease,
  } = strategyData;

  return (
    <section id={`strategy-${id}`} className={`section-strategy py-10 md:py-20 ${isReversed ? 'bg-light-blue' : ''}`}>
      <div className="px-4 mx-auto max-w-6xl">

        {/* Mobile Layout - Single Column with Specific Order */}
        <div className="block md:hidden space-y-6">
          {/* 1. Title */}
          <h2 className="font-bold text-center text-h2-mobile leading-snug text-gray-900">
            {strategySectionTitle}
          </h2>

          {/* 2. Action Steps Text */}
          <p className="leading-relaxed text-body font-bold text-gray-800">
            {actionSteps}
          </p>

          {/* 3. Action Steps List */}
          {actionStepsList && actionStepsList.length > 0 && (
            <ul className="space-y-3 mb-7 mt-5">
              {actionStepsList.map((item, index) => (
                <li key={index} className="flex items-start gap-3 mb-4">
                  <CircleCheck className="flex-shrink-0 w-5 h-5 fill-[var(--color-gunmetal-light)] text-white mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* 4. Video */}
          {videoId && videoHash && (
            <>
              <div className="flex items-center justify-center text-sm text-white bg-[var(--color-gunmetal)] uppercase tracking-widest text-center p-1.5 mb-0">
                <span>{videoContainerText}</span>
                <CircleArrowDown className="flex-shrink-0 ml-3 w-5 h-5" />
              </div>
              <div style={{ padding: "56.25% 0 0 0", marginBottom: "1rem", position: "relative" }}>
                <iframe
                  src={`https://player.vimeo.com/video/${videoId}?h=${videoHash}&badge=0&autopause=0&player_id=0&app_id=58479`}
                  frameBorder={0}
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                  }}
                  title={strategySectionTitle}
                />
              </div>
            </>
          )}

          {/* 5. Increases Table */}
          <div className="my-8 md:my-0 max-w-3xl mx-auto border border-gray-300 overflow-hidden">
            <table className="w-full text-center border-collapse uppercase">
              <thead className="bg-gray-200">
                <tr>
                  <th className="w-1/2 px-6 py-4 border-b border-gray-300 border-r border-gray-300">
                    <span className="block font-medium -m-0.5">Expected Increase In</span>
                    <span className="block font-bold text-lg">Revenue</span>
                  </th>
                  <th className="w-1/2 px-6 py-4 border-b border-gray-300">
                    <span className="block text-gray-900 font-medium uppercase -m-0.5">Expected Increase In</span>
                    <span className="block text-gray-900 font-bold text-lg">Profit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-lg font-bold text-gray-900">
                  <td className="py-6 border-t border-gray-300 border-r border-gray-300">
                    {revenueIncrease}
                  </td>
                  <td className="py-6 border-t border-gray-300">
                    {profitIncrease}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 6. Button */}
          <div className="text-center">
            <ReportButton />
          </div>

        </div>

        {/* Desktop Layout - Two Columns with Alternating */}
        <div className="hidden md:grid items-center gap-20 md:grid-cols-2">
          {isReversed ? (
            <>
              {/* Video Column */}
              <div className="min-w-0">
                {videoId && videoHash && (
                  <>
                    <div className="flex items-center justify-center text-sm text-white bg-[var(--color-gunmetal)] uppercase tracking-widest text-center p-1.5">
                      <span>{videoContainerText}</span>
                      <CircleArrowDown className="flex-shrink-0 ml-3 w-5 h-5" />
                    </div>
                    <div style={{ padding: "56.25% 0 0 0", marginBottom: "2rem", position: "relative" }}>
                      <iframe
                        src={`https://player.vimeo.com/video/${videoId}?h=${videoHash}&badge=0&autopause=0&player_id=0&app_id=58479`}
                        frameBorder={0}
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%"
                        }}
                        title={strategySectionTitle}
                      />
                    </div>
                  </>
                )}

                <div className="max-w-3xl mx-auto border border-gray-300 overflow-hidden">
                  <table className="w-full text-center border-collapse uppercase">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="w-1/2 px-6 py-4 border-b border-gray-300 border-r border-gray-300">
                          <span className="block font-medium -m-0.5">Expected Increase In</span>
                          <span className="block font-bold text-lg">Revenue</span>
                        </th>
                        <th className="w-1/2 px-6 py-4 border-b border-gray-300">
                          <span className="block text-gray-900 font-medium uppercase -m-0.5">Expected Increase In</span>
                          <span className="block text-gray-900 font-bold text-lg">Profit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr className="text-lg font-bold text-gray-900">
                        <td className="py-6 border-t border-gray-300 border-r border-gray-300">
                          {revenueIncrease}
                        </td>
                        <td className="py-6 border-t border-gray-300">
                          {profitIncrease}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Content Column */}
              <div className="min-w-0">
                <h2 className="mb-6 font-bold text-center md:text-left text-h2-mobile md:text-5xl tracking-tight leading-h2 text-gray-900">
                  {strategySectionTitle}
                </h2>

                <div className="space-y-4">
                  <p className="leading-relaxed text-body font-bold text-gray-800">
                    {actionSteps}
                  </p>

                  {actionStepsList && actionStepsList.length > 0 && (
                    <ul className="space-y-3 mb-7 mt-5">
                      {actionStepsList.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 mb-4">
                          <CircleCheck className="flex-shrink-0 w-5 h-5 fill-[var(--color-gunmetal-light)] text-white mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <ReportButton />
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Content Column */}
              <div className="min-w-0">
                <h2 className="mb-6 font-bold text-center md:text-left text-h2-mobile md:text-5xl tracking-tight leading-h2 text-gray-900">
                  {strategySectionTitle}
                </h2>

                <div className="space-y-4">
                  <p className="leading-relaxed text-body font-bold text-gray-800">
                    {actionSteps}
                  </p>

                  {actionStepsList && actionStepsList.length > 0 && (
                    <ul className="space-y-3 mb-7 mt-5">
                      {actionStepsList.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 mb-4">
                          <CircleCheck className="flex-shrink-0 w-5 h-5 fill-[var(--color-gunmetal-light)] text-white mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <ReportButton />
                </div>
              </div>

              {/* Video Column */}
              <div className="min-w-0">
                {videoId && videoHash && (
                  <>
                    <div className="flex items-center justify-center text-sm text-white bg-[var(--color-gunmetal)] uppercase tracking-widest text-center p-1.5">
                      <span>{videoContainerText}</span>
                      <CircleArrowDown className="flex-shrink-0 ml-3 w-5 h-5" />
                    </div>
                    <div style={{ padding: "56.25% 0 0 0", marginBottom: "2rem", position: "relative" }}>
                      <iframe
                        src={`https://player.vimeo.com/video/${videoId}?h=${videoHash}&badge=0&autopause=0&player_id=0&app_id=58479`}
                        frameBorder={0}
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%"
                        }}
                        title={strategySectionTitle}
                      />
                    </div>
                  </>
                )}

                <div className="max-w-3xl mx-auto border border-gray-300 overflow-hidden">
                  <table className="w-full text-center border-collapse uppercase">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="w-1/2 px-6 py-4 border-b border-gray-300 border-r border-gray-300">
                          <span className="block font-medium -m-0.5">Expected Increase In</span>
                          <span className="block font-bold text-lg">Revenue</span>
                        </th>
                        <th className="w-1/2 px-6 py-4 border-b border-gray-300">
                          <span className="block text-gray-900 font-medium uppercase -m-0.5">Expected Increase In</span>
                          <span className="block text-gray-900 font-bold text-lg">Profit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-lg font-bold text-gray-900">
                        <td className="py-6 border-t border-gray-300 border-r border-gray-300">
                          {revenueIncrease}
                        </td>
                        <td className="py-6 border-t border-gray-300">
                          {profitIncrease}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
