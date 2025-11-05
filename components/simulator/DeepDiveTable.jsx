"use client";

import { formatCurrency } from "@/utils/formatters";
import React from "react";

export default function DeepDiveTable({ rows, currency }) {
  const symbols = { USD: "$", CAD: "CA$", EUR: "€", GBP: "£" };
  const symbol = symbols[currency] || "$";

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gunmetal text-white">
            <th className="px-4 py-3 text-left">AREA</th>
            <th className="px-4 py-3 text-right">PROFIT INCREASE</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            const isEven = idx % 2 === 0;
            const display = `${symbol}${Math.round(row.profitIncrease)
              .toLocaleString("en-US")}`;

            return (
              <tr key={row.id} className={isEven ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-2 border-b text-gray-800">{row.name}</td>
                <td className="px-4 py-2 border-b text-right text-gray-800">
                  {display}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
