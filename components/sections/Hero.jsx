import React from "react";
import VideoPlayer from "@/components/shared/VideoPlayer";
import CtaButton from "@/components/shared/CtaButton";

export default function Hero() {
    return (
        <section id="hero" className="relative py-16 overflow-hidden md:py-24">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
            <img src="./AdobeStock_186301146.jpeg" alt="" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-light-blue opacity-30" />
            </div>
            {/* Content */}
            <div className="relative z-10 px-4 mx-auto max-w-7xl">
                <div className="grid items-center gap-12 md:grid-cols-2">
                    {/* Left Column */}
                    <div>
                    <h1 className="mb-6 font-bold text-center md:text-left text-h1-mobile md:text-h1-tablet lg:text-h1 leading-h1 text-navy">
                        Unlock the Power of Compounding Growth in Your Business
                    </h1>
                    <p className="mb-8 leading-relaxed text-gray-600 text-body">
                        As a business owner, the key to unlocking exponential profitability isn't a single, massive change. It's the power of small, consistent improvements compounded over time. Our Profit Acceleration Simulator™ shows you how.
                    </p>

                    <div className="text-center md:text-left">
                        <CtaButton variant="primary">Run The Simulator</CtaButton>
                    </div>

                    </div>

                    <VideoPlayer />
                </div>
            </div>
        </section>
    );
};
