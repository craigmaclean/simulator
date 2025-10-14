"use client";

import { useState, useRef, useEffect, useCallback } from "react";

import Hero from "@/components/sections/Hero";
import PowerOfCompounding from "@/components/sections/PowerOfCompounding";
import DeepDiveCta from "@/components/sections/DeepDiveCta";
import JumpStart12 from "@/components/sections/JumpStart12";
import Simulator from "@/components/sections/Simulator";
import DeepDive40 from "@/components/sections/DeepDive40";
import SendReportDialog from "@/components/shared/SendReportDialog";

export default function Home() {
  const [isReportOpen, setIsReportOpen] = useState(false);
  const openReport = () => setIsReportOpen(true);

  const [showDeepDive, setShowDeepDive] = useState(false);
  const [deepDiveForm, setDeepDiveForm] = useState({
    currency: "USD",
    revenue: 0,
    grossMargin: 0,
    netMargin: 0,
    globalImpact: 0,
  });

  const [calculationResults, setCalculationResults] = useState({
    tableOne: null,
    deepDive: null,
  });

  const deepDiveRef = useRef(null);

  const handleOpenDeepDive = () => setShowDeepDive(true);

  // memoize the calculation results handler
  const handleCalculationResults = useCallback((updater) => {
    setCalculationResults(updater);
  }, []);

  // memoize the deep dive results handler
  const handleDeepDiveResults = useCallback((results) => {
    setCalculationResults(prev => ({ ...prev, deepDive: results }));
  }, []);

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

      <Simulator
        onFormSnapshot={setDeepDiveForm}
        onCalculationResults={handleCalculationResults} // use memoized callback
        onOpenReport={openReport}
      />

      <DeepDiveCta onDeepDive={handleOpenDeepDive} onOpenReport={openReport} />

      <DeepDive40
        ref={deepDiveRef}
        show={showDeepDive}
        currency={deepDiveForm.currency}
        revenue={deepDiveForm.revenue}
        grossMargin={deepDiveForm.grossMargin}
        netMargin={deepDiveForm.netMargin}
        globalImpact={deepDiveForm.globalImpact}
        onDeepDiveResults={handleDeepDiveResults} // use memoized callback
      />

      <SendReportDialog
        open={isReportOpen}
        onOpenChange={setIsReportOpen}
        revenue={deepDiveForm.revenue}
        grossMargin={deepDiveForm.grossMargin}
        netMargin={deepDiveForm.netMargin}
        globalImpact={deepDiveForm.globalImpact}
        currency={deepDiveForm.currency}
        tableOneResults={calculationResults.tableOne}
        deepDiveResults={calculationResults.deepDive}
        showDeepDive={showDeepDive}
      />
    </>
  );
}
