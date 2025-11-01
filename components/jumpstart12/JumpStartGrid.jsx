import JumpStartCard from '@/components/jumpstart12/JumpStartCard';
import { STRATEGIES_ARRAY } from '@/data/strategyContent';

export default function JumpStartGrid({
  strategies = STRATEGIES_ARRAY,  // Use defaults if not provided
  enableFlip = true,
  enableLinks = false
}) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
      {strategies.map((strategy, index) => (
        <JumpStartCard
          key={strategy.id || index}
          strategy={strategy}
          index={index}
          enableFlip={enableFlip}
          enableLinks={enableLinks}
        />
      ))}
    </div>
  );
}
