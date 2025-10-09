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
            <TableHead className="px-2 py-3 text-xs text-left text-white sm:px-4 sm:text-sm">
                AREA
            </TableHead>
            <TableHead className="px-2 py-3 text-xs text-center text-white sm:px-4 sm:text-sm whitespace-nowrap">
                % IMPACT
            </TableHead>
            <TableHead className="px-2 py-3 text-xs text-right text-white sm:px-4 sm:text-sm whitespace-nowrap">
                PROFIT INCREASE
            </TableHead>
            </TableRow>
        </TableHeader>

        <TableBody>
            {strategies.map((strategy, index) => {
            const actualIndex = startIndex + index;
            const zebra = index % 2 === 1 ? "bg-gray-50" : "bg-white";

            return (
                <TableRow key={actualIndex} className={zebra}>
                <TableCell className="px-2 py-2 text-sm leading-tight border-b sm:px-4 sm:text-base">
                    {strategy.name}
                </TableCell>

                <TableCell className="px-2 py-2 border-b sm:px-4">
                    <div className="flex items-center justify-center gap-1">
                    <Input
                        type="number"
                        inputMode="decimal"
                        min={0}
                        max={10}
                        step={0.1}
                        value={strategy.impact}
                        onChange={(e) => handleChange(actualIndex, e)}
                        onFocus={(e) => e.target.select()}
                        onWheel={(e) => e.currentTarget.blur()}
                        aria-label={`${strategy.name} impact percent`}
                        className="text-sm text-right impact-input w-14 sm:w-20 sm:text-base"
                    />
                    <span className="text-sm text-gray-500 sm:text-base">%</span>
                    </div>
                </TableCell>

                <TableCell className="px-2 py-2 text-sm text-right border-b sm:px-4 sm:text-base whitespace-nowrap">
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
