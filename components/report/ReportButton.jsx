import { Button } from "../ui/button";
import { ArrowRight } from 'lucide-react';

export default function ReportButton() {
  return (
    <Button className="bg-[var(--color-bright-blue)] rounded-md mb-4 transition-all shadow-sm hover:bg-[var(--color-bright-blue)] hover:opacity-[0.90] hover:shadow-md focus:outline-none text-xl font-semibold uppercase py-10 px-6">
      <div className="flex flex-row items-center justify-center py-6">
        <div className="flex flex-col border-r border-gray-500 pr-5">
          <span className="font-semibold">Want Help With This?</span>
          <span className="text-sm font-extralight tracking-widest">Book a Profit Acceleration Session</span>
        </div>
        <ArrowRight className="size-6 ml-4" />
      </div>
    </Button>
  );
}
