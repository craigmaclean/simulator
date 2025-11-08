"use client";

import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

export default function ImpactSlider({
  value = 0,
  onChange,
  label = "Set % Impact Across All Areas",
  tooltipContent = "Adjust the percentage impact to see how it affects your profit projections across all strategies.",
  id = "impactSlider",
}) {
  // clamp + coerce
  const v = Math.min(10, Math.max(0, Number(value) || 0));
  const percent = (v / 10) * 100;

  const handle = (e) => {
    const n = parseFloat(e.target.value);
    onChange(Number.isFinite(n) ? n : 0);
  };

  return (
    <TooltipProvider>
      <div className="pt-6 pb-0">
        <div className="flex items-center justify-center gap-2 mb-1">
          <h3 id={`${id}-label`} className="text-lg font-semibold text-gray-800">
            {label}
          </h3>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full w-4 h-4 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <Info className="w-3.5 h-3.5" />
              </button>
            </TooltipTrigger>
            <TooltipContent className="p-4 bg-light-blue">
              <p className="max-w-xs">{tooltipContent}</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="flex items-center gap-4 justify-center">
          <div className="flex-1 max-w-[70%]">
            <input
              id={id}
              type="range"
              className="impact-slider w-full"
              min={0}
              max={10}
              step={0.1}
              value={v}
              onChange={handle}
              // drives your gradient fill
              style={{ "--value": `${percent}%` }}
              aria-labelledby={`${id}-label`}
              aria-valuemin={0}
              aria-valuemax={10}
              aria-valuenow={v}
            />
          </div>

          <span className="text-2xl font-semibold text-gray-800 min-w-[60px]">
            {v.toFixed(1)}%
          </span>
        </div>
      </div>
    </TooltipProvider>
  );
}
