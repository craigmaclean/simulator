import LinkToSection from '../shared/LinkToSection';

export default function JumpStartCard({
  strategy,
  index,
  enableFlip = true,
  enableLinks = false
}) {
  const cardTitle = strategy.cardTitle;
  const cardDescription = strategy.description;
  const anchorId = strategy.id;

  // If links enabled, show static card wrapped in Link (no flip)
  if (enableLinks) {
    return (
      <LinkToSection href={`#strategy-${anchorId}`}>
        <div className="h-[6rem] md:h-[8rem]">
          <div className="flex items-center justify-center h-full px-4 text-white bg-navy rounded-lg hover:bg-app-primary transition-colors duration-300">
            <div className="font-semibold uppercase text-card-title text-center">{cardTitle}</div>
          </div>
        </div>
      </LinkToSection>
    );
  }

  // Original flip card (simulator page)
  return (
    <div className="flip-card h-[6rem] md:h-[8rem]">
      <div className="flip-card-inner">
        <div className="flex items-center justify-center px-4 text-white flip-card-front bg-navy">
          <div className="font-semibold uppercase text-card-title">{cardTitle}</div>
        </div>
        <div className="flex items-center justify-center px-4 flip-card-back bg-app-primary text-white">
          <div className="text-card-desc">{cardDescription}</div>
        </div>
      </div>
    </div>
  );
}
