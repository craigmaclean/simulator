"use client";

import { useState, useRef, useEffect } from "react";

import Hero from "@/components/sections/Hero";
import PowerOfCompounding from "@/components/sections/PowerOfCompounding";
import DeepDiveCta from "@/components/sections/DeepDiveCta";
import CtaButton from "@/components/shared/CtaButton";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JumpStart12 from "@/components/sections/JumpStart12";
import Simulator from "@/components/sections/Simulator";
import DeepDive40 from "@/components/sections/DeepDive40";

export default function Home() {
    const [showDeepDive, setShowDeepDive] = useState(false);
    const [deepDiveForm, setDeepDiveForm] = useState({
        currency: "USD",
        revenue: 0,
        grossMargin: 0,
        netMargin: 0,
        globalImpact: 0,
    });

    const deepDiveRef = useRef(null);

    const handleOpenDeepDive = () => setShowDeepDive(true);

    // Smooth scroll when Deep Dive becomes visible
    useEffect(() => {
        if (showDeepDive && deepDiveRef.current) {
        deepDiveRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
        }
    }, [showDeepDive]);

    return (
        <>

        <Hero />

        <PowerOfCompounding />

        <JumpStart12 />

        <Simulator onFormSnapshot={setDeepDiveForm} />

        <DeepDiveCta onDeepDive={handleOpenDeepDive} />

        <DeepDive40
            ref={deepDiveRef}
            show={showDeepDive}
            currency={deepDiveForm.currency}
            revenue={deepDiveForm.revenue}
            grossMargin={deepDiveForm.grossMargin}
            netMargin={deepDiveForm.netMargin}
            globalImpact={deepDiveForm.globalImpact}
        />

        </>
    );
}
