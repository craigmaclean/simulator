import { CURRENCIES } from '@/data/currencies';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem
} from "@/components/ui/select";

export default function SimulatorInputPanel({ formData, onChange }) {
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
            type="number"
            inputMode="numeric"
            min={0}
            step="1"
            value={formData.revenue}
            onChange={(e) => onChange('revenue', parseFloat(e.target.value) || 0)}
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
        />
      </div>
    </div>
  );
}
