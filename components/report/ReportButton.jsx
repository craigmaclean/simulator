/**
 * ReportButton - Server Component
 *
 * CTA button to book a call with the coach. Linked to calendar url.
 */

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import  { CALENDAR_URL } from '@/lib/constants';

export default function ReportButton() {
  return (
    <Link href={CALENDAR_URL} target="_blank">
      <Button className="bg-[var(--color-app-primary)] text-white rounded-md mb-4 shadow-md hover:bg-[var(--color-app-primary)] hover:opacity-[0.90] hover:shadow-xl focus:outline-none transition-all text-xl font-semibold uppercase py-10 px-6">
        <div className="flex flex-row items-center justify-center py-6">
          <div className="flex flex-col">
            <span className="font-semibold">Want Help With This?</span>
            <span className="text-sm font-extralight tracking-widest">Book a Profit Acceleration Session</span>
          </div>
        </div>
      </Button>
    </Link>
  );
}
