import { Button } from "../ui/button";
import { ArrowRight } from 'lucide-react';

export default function ReportButton() {
  return (
    <Button className="bg-[var(--color-primary)] text-white rounded-md mb-4 shadow-md hover:bg-[var(--color-primary)] hover:opacity-[0.90] hover:shadow-xl focus:outline-none transition-all text-xl font-semibold uppercase py-10 px-6">
      <div className="flex flex-row items-center justify-center py-6">
        <div className="flex flex-col">
          <span className="font-semibold">Want Help With This?</span>
          <span className="text-sm font-extralight tracking-widest">Book a Profit Acceleration Session</span>
        </div>
      </div>
    </Button>
  );
}
