"use client";

import StrategyTable from '@/components/simulator/StrategyTable';

export default function StrategyTables({ strategies, onStrategyChange, currency }) {
  const leftStrategies = strategies.slice(0, 6);
  const rightStrategies = strategies.slice(6, 12);

  return (
    <div className="mb-8 bg-white rounded-lg shadow-lg sm:p-8">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 sm:gap-8">
        <StrategyTable
          strategies={leftStrategies}
          onStrategyChange={onStrategyChange}
          startIndex={0}
          currency={currency}
        />
        <StrategyTable
          strategies={rightStrategies}
          onStrategyChange={onStrategyChange}
          startIndex={6}
          currency={currency}
        />
      </div>
    </div>
  );
}
