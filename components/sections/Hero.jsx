/**
 * Hero - Server Component
 *
 * Simulator homepage hero section.
 */

import VideoPlayer from "@/components/shared/VideoPlayer";
import CtaButton from "@/components/shared/CtaButton";
import LinkToSection from "../shared/LinkToSection";

export default function Hero() {
    return (
      <section id="hero" className="relative py-16 overflow-hidden md:py-24">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="./hero-bg-compounding.jpg" alt="Unlock the Power of Compounding Growth" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-light-gray opacity-30" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 mx-auto max-w-7xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left Column */}
            <div>
              <h1 className="mb-6 font-bold text-center md:text-left text-h1-mobile md:text-h1-tablet lg:text-h1 leading-h1 text-gray-900">
                Unlock the Power of Compounding Growth in Your Business
              </h1>
              <p className="mb-8 leading-relaxed text-gray-800 text-body">
                As a business owner, the key to unlocking exponential profitability isn't a single, massive change. It's the power of small, consistent improvements compounded over time. Our Profit Acceleration Simulator™ shows you how.
              </p>

              <div className="text-center md:text-left">
                <LinkToSection href="/#simulator">
                  <CtaButton variant="primary">Run The Simulator</CtaButton>
                </LinkToSection>
              </div>
            </div>

            <VideoPlayer />
          </div>
        </div>
      </section>
    );
};
