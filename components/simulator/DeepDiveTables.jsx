/**
 * DeepDiveTables - Server Component
 *
 * Parent grid layout for DD40 strategy table data. Props passed to DeepDiveTable components.
 */

import DeepDiveTable from "@/components/simulator/DeepDiveTable";

export default function DeepDiveTables({ rows, currency }) {
  const half = Math.ceil(rows.length / 2);
  const left = rows.slice(0, half);
  const right = rows.slice(half);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <DeepDiveTable rows={left} currency={currency} />
      <DeepDiveTable rows={right} currency={currency} />
    </div>
  );
}
