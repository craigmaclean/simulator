"use client";

import React from "react";
import { formatCurrency } from "../../utils/formatters";
import { Input } from "../ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";

export default function StrategyTable({
  strategies,
  onStrategyChange,
  startIndex = 0,
  currency,
}) {
  const handleChange = (actualIndex, e) => {
    const num = parseFloat(e.target.value);
    // clamp to 0–10 and coerce invalid to 0
    const next = Number.isFinite(num) ? Math.min(10, Math.max(0, num)) : 0;
    onStrategyChange(actualIndex, next);
  };

  return (
    <div className="overflow-x-auto">
      <Table className="w-full">
        <TableHeader>
          <TableRow className="bg-navy hover:bg-navy">
            <TableHead className="px-4 py-3 text-left text-white">AREA</TableHead>
            <TableHead className="px-4 py-3 text-center text-white">% IMPACT</TableHead>
            <TableHead className="px-4 py-3 text-right text-white">PROFIT INCREASE</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {strategies.map((strategy, index) => {
            const actualIndex = startIndex + index;
            const zebra = index % 2 === 1 ? "bg-gray-50" : "bg-white";

            return (
              <TableRow key={actualIndex} className={zebra}>
                <TableCell className="px-4 py-2 border-b">
                  {strategy.name}
                </TableCell>

                <TableCell className="px-4 py-2 border-b">
                  <div className="flex items-center justify-center">
                    <Input
                      type="number"
                      inputMode="decimal"
                      min={0}
                      max={10}
                      step={0.1}
                      value={strategy.impact}
                      onChange={(e) => handleChange(actualIndex, e)}
                      onWheel={(e) => e.currentTarget.blur()} // avoid accidental scroll changes
                      aria-label={`${strategy.name} impact percent`}
                      className="impact-input w-20 text-right"
                    />
                    <span className="ml-1 text-base text-gray-500">%</span>
                  </div>
                </TableCell>

                <TableCell className="px-4 py-2 border-b text-right">
                  {formatCurrency(strategy.profitIncrease || 0, currency)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
