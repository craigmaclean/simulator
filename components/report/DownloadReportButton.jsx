/**
 * DownloadReportButton - Client Component
 *
 * This component generates and downloads a PDF report of the simulation results.
 * Generates a QR code linking to the calendar booking URL and embeds it in the PDF
 * along with all strategy details, profit projections, and action steps.
 */

'use client';

import { useState } from 'react';
import { ArrowDownToLine, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pdf } from '@react-pdf/renderer';
import ReportPDF from './ReportPDF';
import qrcode from 'qrcode-generator';
import  { COACH_FIRST_NAME, COACH_LAST_NAME, CALENDAR_URL } from '@/lib/constants';

export default function DownloadReportButton({ simulation }) {
  const [isGenerating, setIsGenerating] = useState(false);

  const generateQRCodeDataURL = (text) => {
    // Validation
    if (!text || typeof text !== 'string') {
      console.error('Invalid text for QR code:', text);
      return null;
    }

    // Create QR code with typeNumber 4 and error correction level M
    const qr = qrcode(4, 'M');
    qr.addData(text);
    qr.make();

    const cellSize = 8;
    const margin = 4;
    const size = qr.getModuleCount();
    const canvasSize = size * cellSize + margin * 2 * cellSize;

    const canvas = document.createElement('canvas');
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    const ctx = canvas.getContext('2d');

    // White background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvasSize, canvasSize);

    // Draw QR code
    ctx.fillStyle = '#1e3a8a';
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        if (qr.isDark(row, col)) {
          ctx.fillRect(
            col * cellSize + margin * cellSize,
            row * cellSize + margin * cellSize,
            cellSize,
            cellSize
          );
        }
      }
    }

    return canvas.toDataURL('image/png');
  };

  const handleDownload = async () => {
    setIsGenerating(true);

    try {
      // Generate QR code from CONST
      const qrCodeDataUrl = generateQRCodeDataURL(CALENDAR_URL);

      // Generate PDF with QR code
      const blob = await pdf(
        <ReportPDF
          simulation={simulation}
          calendarUrl={CALENDAR_URL}
          qrCodeDataUrl={qrCodeDataUrl}
        />
      ).toBlob();

      // Download
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `profit-acceleration-report-${simulation.id}.pdf`;
      link.click();

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
      className="bg-[var(--color-app-primary)] text-white rounded-md mb-4 shadow-md hover:bg-[var(--color-app-primary)]hover:opacity-[0.90] hover:shadow-xl text-md md:text-lg font-semibold uppercase py-8 px-6 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col border-r border-gray-500 pr-5">
          <span className="font-semibold hidden md:block">
            {isGenerating ? 'Generating PDF...' : 'Download Your JumpStart 12 Report'}
          </span>
          <span className="font-semibold contents md:hidden">
            {isGenerating ? 'Generating PDF...' : 'Download Your JS12 Report'}
          </span>
        </div>
        {isGenerating ? (
          <Loader2 className="size-6 ml-4 animate-spin" />
        ) : (
          <ArrowDownToLine className="size-5 md:size-6 ml-4" />
        )}
      </div>
    </Button>

  );
}
