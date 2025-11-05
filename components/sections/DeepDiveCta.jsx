import CtaButton from "@/components/shared/CtaButton";

export default function DeepDiveCta({
                                    onDeepDive,
                                    onOpenReport = () => {}, // default to a no-op to avoid “onClick=false”
                                    }) {
  return (
    <section id="cta" className="py-16 bg-gunmetal">
      <div className="px-4 mx-auto text-center max-w-7xl">
        <h2 className="mb-6 font-bold text-white text-h2-mobile md:text-h2-tablet lg:text-h2 leading-h2">
          Ready to Accelerate Your Growth?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-white text-body">
          Expand beyond the JumpStart 12 impact areas and discover the power of incremental changes in up to 40 key areas.
        </p>

        {typeof onDeepDive === "function" && (
          <CtaButton onClick={onDeepDive} variant="accent" size="large">
            Deep Dive Your Profits Further
          </CtaButton>
        )}

        <p className="mt-6 mb-3 text-base text-white">
          I don&apos;t want to deep dive my profits further.
        </p>

        <CtaButton
          onClick={onOpenReport}
          variant="secondary"
        >
          Send Me the Report
        </CtaButton>
      </div>
    </section>
  );
}
