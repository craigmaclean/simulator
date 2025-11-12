/**
 * DeepDiveTable - Server Component
 *
 * Individual tables containing DD40 strategy data (area/strategy name, profit increase).
 */

import { formatCurrency } from "@/utils/formatters";

export default function DeepDiveTable({ rows, currency }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-navy text-white">
            <th className="px-4 py-3 text-left">AREA</th>
            <th className="px-4 py-3 text-right">PROFIT INCREASE</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <tr key={row.id} className={isEven ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-2 border-b text-gray-800">{row.name}</td>
                <td className="px-4 py-2 border-b text-right text-gray-800">
                  {formatCurrency(Math.round(row.profitIncrease), currency)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
