"use client";

import React from 'react'
import CtaButton from '@/components/shared/CtaButton';

export default function DeepDiveCta({ onDeepDive = () => {} }) {
    return (

        <section id="cta" className="py-16 bg-navy">
            <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-h2-mobile md:text-h2-tablet lg:text-h2 leading-h2 font-bold text-white mb-6">Ready to Accelerate Your Growth?</h2>
            <p className="text-body text-white mb-8 max-w-2xl mx-auto">
                Expand beyond the JumpStart 12 impact areas and discover the power of incremental changes in up to 40 key areas.
            </p>

            <CtaButton onClick={() => onDeepDive?.()} variant="accent" size="large">Deep Dive Your Profits Further</CtaButton>

            <p className="text-white text-base mb-3">I don't want to deep dive my profits further.</p>

            <CtaButton variant="secondary">Send Me the Report</CtaButton>

            </div>
        </section>

    );
}
