import { ArrowDownToLine, CircleCheck } from 'lucide-react';
import DownloadReportButton from './DownloadReportButton';

export default function DownloadReport({ simulation }) {
  return (
    <section id="report-download" className="py-16">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="text-gray-800">
          <h2 className="mb-6 font-bold text-center text-h2-mobile md:text-h2-tablet lg:text-h2 leading-h2 text-gray-900">Download Your Report Now</h2>

          <p className="max-w-5xl mx-auto leading-relaxed font-bold text-lg">Why should you download it?</p>

          <ul className="max-w-5xl mx-auto space-y-3 mb-7 mt-5">
            <li className="flex items-start gap-3 mb-4">
              <CircleCheck className="flex-shrink-0 w-5 h-5 fill-[var(--color-gunmetal-light)] text-white mt-1" />
              <span><strong>See the full picture:</strong> Your report consolidates key metrics, highlights profit-levers, and shows where you'll gain impact.</span>
            </li>
            <li className="flex items-start gap-3 mb-4">
              <CircleCheck className="flex-shrink-0 w-5 h-5 fill-[var(--color-gunmetal-light)] text-white mt-1" />
              <span><strong>Get a clear next step:</strong> We've organized each impact area into practical recommendations you can act on immediately.</span>
            </li>
            <li className="flex items-start gap-3 mb-4">
              <CircleCheck className="flex-shrink-0 w-5 h-5 fill-[var(--color-gunmetal-light)] text-white mt-1" />
              <span><strong>Own your roadmap:</strong> With this in hand, you'll be fully equipped to lead the change and measure progress along the way.</span>
            </li>
          </ul>

          <p className="max-w-5xl mx-auto text-lg mb-4"><strong>Ready to take control of your profit potential?</strong><br />Click the button below to download your report, save it, review it, and share it if you like.</p>

          <p className="max-w-5xl mx-auto leading-relaxed font-bold text-lg mb-10">You've already done the hard part — now it's time to move forward with confidence.</p>

          <div className="text-center">
            <DownloadReportButton simulation={simulation} />
          </div>

        </div>
      </div>
    </section>
  );
}
