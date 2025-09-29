"use client";

import React from 'react'
import JumpStartGrid from "@/components/jumpstart12/JumpStartGrid";
import JumpStartCard from "@/components/jumpstart12/JumpStartCard";

export default function JumpStart12() {
    return (

        <section id="jumpstart-12" className="py-16 bg-light-blue">
            <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-h2-mobile md:text-h2-tablet lg:text-h2 leading-h2 font-bold text-navy mb-4">
                The JumpStart 12 Operating System
                </h2>
                <p className="text-body text-gray-600 max-w-2xl mx-auto leading-relaxed">
                We've identified 12 core areas - the JumpStart 12 - that have the biggest impact on a business' bottom line. By focusing on these areas, you can create a powerful operating system to install in your business for sustainable, long-term growth.
                </p>
            </div>

            <JumpStartGrid />

            </div>
        </section>

    );
}
