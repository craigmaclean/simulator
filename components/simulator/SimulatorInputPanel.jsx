"use client";

import { CURRENCIES } from '@/data/currencies';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";


const formatNumber = (num) => {
  if (!num && num !== 0) return '';
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const parseFormattedNumber = (str) => {
  const cleaned = str.replace(/,/g, '');
  return parseFloat(cleaned) || 0;
};

export default function SimulatorInputPanel({ formData, onChange }) {

    // Get currency symbol
    const currentCurrency = CURRENCIES.find(c => c.code === formData.currency);
    const currencySymbol = currentCurrency?.symbol || '$';

    // Format display value
    const displayValue = formData.revenue
        ? `${currencySymbol}${formatNumber(formData.revenue)}`
        : '';

    // Validation: Check if Net Profit > Gross Profit
    const isNetProfitInvalid = formData.netMargin > formData.grossMargin;

    // Handle revenue input
    const handleRevenueChange = (e) => {
        const input = e.target.value;
        const cleaned = input.replace(/[^0-9,]/g, '');
        const numericValue = parseFormattedNumber(cleaned);
        onChange('revenue', numericValue);
    };

    // Handle percentage input
    const handlePercentageChange = (fieldName) => (e) => {
      const value = e.target.value;
      const numValue = parseFloat(value);

      if (value === '' || (!isNaN(numValue) && numValue >= 0 && numValue <= 100)) {
        onChange(fieldName, numValue || 0);
      }
    };

    const handlePercentageBlur = (fieldName) => (e) => {
      const value = parseFloat(e.target.value);

      if (!isNaN(value)) {
        // Round to 2 decimal places on blur
        const rounded = Math.round(value * 100) / 100;
        const maxValue = Math.min(rounded, 100);

        // ✅ Additional validation for netMargin
        if (fieldName === 'netMargin') {
          // If net margin exceeds gross margin, cap it at gross margin
          const cappedValue = Math.min(maxValue, formData.grossMargin);
          onChange(fieldName, cappedValue);
        } else {
          onChange(fieldName, maxValue);
        }
      }
    };

  return (
    <TooltipProvider>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-2">
          <Label className="block text-sm font-semibold text-gray-800 mb-2">Select Currency</Label>
          <Select
              value={
              CURRENCIES.some(c => c.code === formData.currency)
                  ? formData.currency
                  : undefined
              }
              onValueChange={(v) => onChange("currency", v)}
          >
              <SelectTrigger className="w-full">
              <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent className="max-h-64 overflow-y-auto">
              {CURRENCIES.map((curr) => (
                  <SelectItem key={curr.code} value={curr.code}>
                  {curr.label}
                  </SelectItem>
              ))}
              </SelectContent>
          </Select>
        </div>

        <div className="lg:col-span-4">
          <div className="flex items-center gap-2 mb-2">
            <Label htmlFor="revenue" className="text-sm font-semibold text-gray-800">
              Annual Revenue
            </Label>
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
                <p className="max-w-xs text-sm leading-relaxed">
                  Annual revenue is all the money your company earns from sales activity during a given year before costs and expenses are subtracted.
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
          <Input
              id="revenue"
              type="text"
              inputMode="numeric"
              value={displayValue}
              onChange={handleRevenueChange}
              onFocus={(e) => e.target.select()}
              placeholder={`${currencySymbol}0`}
          />
        </div>

        <div className="lg:col-span-3">
          <div className="flex items-center gap-2 mb-2">
            <Label htmlFor="grossMargin" className="text-sm font-semibold text-gray-800">
              Gross Profit Margin (%)
            </Label>
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
                <p className="max-w-xs text-sm leading-relaxed">
                  To understand your GPM, subtract cost of goods sold from total revenue then divide that number by the total revenue. Basically, if you make an additional sale, you've already covered the rent, utilities, salaries, insurance, etc. Therefore, you can measure the increased sales by Gross Profit Margin.
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
          <Input
            id="grossMargin"
            type="number"
            inputMode="decimal"
            min={0}
            max={100}
            step="0.01"
            value={formData.grossMargin}
            onChange={handlePercentageChange('grossMargin')}
            onBlur={handlePercentageBlur('grossMargin')}
            onFocus={(e) => e.target.select()}
          />
        </div>

        <div className="lg:col-span-3">
          <div className="flex items-center gap-2 mb-2">
            <Label htmlFor="netMargin" className="text-sm font-semibold text-gray-800">
              Net Profit Margin (%)
            </Label>
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
                <p className="max-w-xs text-sm leading-relaxed">
                  This is what is left over after all the bills are paid. This percentage is ALWAYS lower than Gross Profit Margin.
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
          <Input
            id="netMargin"
            type="number"
            inputMode="decimal"
            min={0}
            max={100}
            step="0.01"
            value={formData.netMargin}
            onChange={handlePercentageChange('netMargin')}
            onBlur={handlePercentageBlur('netMargin')}
            onFocus={(e) => e.target.select()}
          />
          {/* Error message */}
          {isNetProfitInvalid && (
            <p className="mt-1 text-sm text-red-600">
              Net Profit Margin cannot exceed Gross Profit Margin.
            </p>
          )}
        </div>
      </div>
    </TooltipProvider>
  );
}
