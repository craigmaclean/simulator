"use client";

import React from 'react'

export default function JumpStartCard({ title, description }) {
    return (
        <div className="flip-card h-[8rem]">
            <div className="flip-card-inner">
                <div className="flip-card-front bg-navy text-white flex items-center justify-center px-4">
                <div className="font-semibold text-card-title uppercase">{title}</div>
                </div>
                <div className="flip-card-back bg-gold text-navy flex items-center justify-center px-4">
                <div className="text-card-desc">{description}</div>
                </div>
            </div>{/* end .flip-card-inner */}
        </div>
    );
}
