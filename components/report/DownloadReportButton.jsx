'use client';

import { useState } from 'react';
import { ArrowDownToLine, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pdf } from '@react-pdf/renderer';
import ReportPDF from './ReportPDF';

export default function DownloadReportButton({ simulation }) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);

    try {
      // Generate PDF blob
      const blob = await pdf(<ReportPDF simulation={simulation} />).toBlob();

      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `profit-acceleration-report-${simulation.id}.pdf`;
      link.click();

      // Cleanup
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={isGenerating}
      className="bg-[var(--color-bright-blue)] rounded-md mb-0 transition-all shadow-sm hover:bg-[var(--color-bright-blue)] hover:opacity-[0.90] hover:shadow-md focus:outline-none text-lg font-semibold uppercase py-8 px-6 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col border-r border-gray-500 pr-5">
          <span className="font-semibold">
            {isGenerating ? 'Generating PDF...' : 'Download Your JumpStart 12 Report'}
          </span>
        </div>
        {isGenerating ? (
          <Loader2 className="size-6 ml-4 animate-spin" />
        ) : (
          <ArrowDownToLine className="size-6 ml-4" />
        )}
      </div>
    </Button>
  );
}
