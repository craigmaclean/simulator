"use client";

import { CURRENCIES } from '@/data/currencies';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem
} from "@/components/ui/select";


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

    // Handle revenue input
    const handleRevenueChange = (e) => {
        const input = e.target.value;
        const cleaned = input.replace(/[^0-9,]/g, '');
        const numericValue = parseFormattedNumber(cleaned);
        onChange('revenue', numericValue);
    };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-8">
      <div className="lg:col-span-2">
        <Label className="block text-sm font-semibold text-gray-700 mb-2">Select Currency</Label>
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
        <Label htmlFor="revenue" className="block text-sm font-semibold text-gray-700 mb-2">
            Annual Revenue
        </Label>
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
        <Label htmlFor="grossMargin" className="block text-sm font-semibold text-gray-700 mb-2">
            Gross Profit Margin (%)
        </Label>
        <Input
            id="grossMargin"
            type="number"
            inputMode="decimal"
            min={0}
            max={100}
            step="0.1"
            value={formData.grossMargin}
            onChange={(e) => onChange('grossMargin', parseFloat(e.target.value) || 0)}
            onFocus={(e) => e.target.select()}
        />
      </div>

      <div className="lg:col-span-3">
        <Label htmlFor="netMargin" className="block text-sm font-semibold text-gray-700 mb-2">
            Net Profit Margin (%)
        </Label>
        <Input
            id="netMargin"
            type="number"
            inputMode="decimal"
            min={0}
            max={100}
            step="0.1"
            value={formData.netMargin}
            onChange={(e) => onChange('netMargin', parseFloat(e.target.value) || 0)}
            onFocus={(e) => e.target.select()}
        />
      </div>
    </div>
  );
}
