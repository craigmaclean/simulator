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

  const hideOnMobile = startIndex === 6;

  return (
    <div className="overflow-x-auto">
      <Table className="w-full table-fixed">
        {/* if index starts at 6, hide TableHeader */}
        <TableHeader className={hideOnMobile ? 'hidden lg:table-header-group' : ''}>
            <TableRow className="bg-navy hover:bg-navy">
            <TableHead className="px-2 py-3 text-xs text-left text-white text-wrap sm:text-base sm:px-4 w-[40%] sm:w-auto">
                AREA
            </TableHead>
            <TableHead className="px-2 py-3 text-xs text-center text-white break-words sm:text-base sm:px-4 whitespace-nowrap w-[30%] sm:w-auto">
                % IMPACT
            </TableHead>
            <TableHead className="px-2 py-3 text-xs text-right text-white break-words sm:text-base sm:px-4 whitespace-nowrap w-[30%] sm:w-auto">
            {/* Visible on 'md' screens and above */}
            <span className="hidden md:inline">
                PROFIT INCREASE
            </span>

            {/* Visible on screens smaller than 'md' */}
            <span className="flex items-center justify-end md:hidden">
                PROFIT
                <svg
                className="w-3 h-3 ml-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 14"
                >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
                </svg>
            </span>
            </TableHead>
            </TableRow>
        </TableHeader>

        <TableBody>
            {strategies.map((strategy, index) => {
            const actualIndex = startIndex + index;
            const zebra = index % 2 === 1 ? "bg-gray-50" : "bg-white";

            return (
                <TableRow key={actualIndex} className={zebra}>

                  {/*
                    * Defined widths here for xs devices.
                    * Widths defined above on TableHead, but no longer exist there if hidden on xs.
                    */
                  }

                  <TableCell className="text-gray-800 px-2 py-2 text-sm leading-tight break-words border-b sm:text-base sm:px-4 w-[40%] sm:w-auto" style={{ textWrap: "auto" }}>{strategy.name}</TableCell>

                  <TableCell className="px-2 py-2 border-b sm:px-4 w-[30%] sm:w-auto">
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

                  <TableCell className="text-gray-800 px-2 py-2 text-sm text-right border-b sm:px-4 sm:text-base whitespace-nowrap w-[30%] sm:w-auto">
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
