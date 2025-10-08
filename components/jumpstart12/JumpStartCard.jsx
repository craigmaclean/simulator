"use client";

import React from 'react'

export default function JumpStartCard({ title, description }) {
    return (
        <div className="flip-card h-[6rem] md:h-[8rem]">
            <div className="flip-card-inner">
                <div className="flex items-center justify-center px-4 text-white flip-card-front bg-navy">
                <div className="font-semibold uppercase text-card-title">{title}</div>
                </div>
                <div className="flex items-center justify-center px-4 flip-card-back bg-gold text-navy">
                <div className="text-card-desc">{description}</div>
                </div>
            </div>{/* end .flip-card-inner */}
        </div>
    );
}
