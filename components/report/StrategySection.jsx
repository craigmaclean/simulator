import { Button } from "../ui/button";
import { CircleArrowDown, CircleCheck, Video } from 'lucide-react';
import ReportButton from "./ReportButton";



export default function StrategySection({ strategyData }) {

  const {
    title,
    actionSteps,
    actionStepsList,
    videoId,
    videoHash,
    videoContainerText
  } = strategyData;

  return (
    <section className="section-strategy py-16">
      <div className="px-4 mx-auto max-w-6xl">
          <div className="grid items-center gap-20 md:grid-cols-2">
            {/* Column - Content */}
            <div>
              <h2 className="mb-6 font-bold text-center md:text-left text-h2-mobile md:text-6xl tracking-tight leading-h2 text-navy">
                  {title}
              </h2>

              <div className="space-y-4">
                <p className="leading-relaxed text-body font-bold">
                {actionSteps}
                </p>

                <ul className="space-y-3 mb-5">
                  {actionStepsList.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CircleCheck className="flex-shrink-0 w-6 h-6 fill-[var(--color-bright-blue)] text-white mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <ReportButton />
              </div>
            </div>

            {/* Column - Video */}
            <div>
              <div className="flex items-center justify-center text-white bg-[var(--color-bright-blue)] uppercase tracking-widest text-center p-1.5">
                <span>Learn About Cutting Costs</span>
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
                  title="Intro-door-to-door"
                />
              </div>

              <div class="max-w-3xl mx-auto border border-gray-300 overflow-hidden">
                <table class="w-full text-center border-collapse uppercase">
                  <thead>
                    <tr>
                      <th class="w-1/2 px-6 py-4 border-b border-gray-300 border-r border-gray-300">
                        <span class="block font-medium">Expected Increase In</span>
                        <span class="block font-extrabold text-lg">Revenue</span>
                      </th>
                      <th class="w-1/2 px-6 py-4 border-b border-gray-300">
                        <span class="block text-gray-800 font-medium uppercase">Expected Increase In</span>
                        <span class="block text-black font-extrabold text-lg mt-1">Profit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="text-lg font-bold text-black">
                      <td class="py-6 border-t border-gray-300 border-r border-gray-300">1.3% / $2,370</td>
                      <td class="py-6 border-t border-gray-300">2.8% / $6,540</td>
                    </tr>
                  </tbody>
                </table>
              </div>



            </div>
          </div>
      </div>
    </section>
  );
}
