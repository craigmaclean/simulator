import React from "react";
import VideoPlayer from "@components/shared/VideoPlayer";
import CtaButton from "@components/shared/CtaButton";

const Hero = () => {
    return (
        <section id="hero" className="relative py-16 md:py-24 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
            <img src="./AdobeStock_186301146.jpeg" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-light-blue opacity-30" />
            </div>
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <div>
                    <h1 className="text-h1-mobile md:text-h1-tablet lg:text-h1 leading-h1 font-bold text-navy mb-6">
                        Unlock the Power of Compounding Growth in Your Business
                    </h1>
                    <p className="text-body text-gray-600 mb-8 leading-relaxed">
                        As a business owner, the key to unlocking exponential profitability isn't a single, massive change. It's the power of small, consistent improvements compounded over time. Our Profit Acceleration Simulator™ shows you how.
                    </p>

                    <CtaButton variant="primary">Run The Simulator</CtaButton>

                    </div>

                    <VideoPlayer />
                </div>
            </div>
        </section>
    );
};

export default Hero;
