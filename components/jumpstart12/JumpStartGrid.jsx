/**
 * JumpStartGrid - Server Component
 *
 * Parent grid layout for the JS12 strategy cards section. Props passed to individual cards.
 * Data for each card is fetched from /data/strategyContent.
 * Homepage diplays each card with hover effect and card description.
 * Report page displays each card as an anchor link.
 */

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
