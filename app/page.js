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
    return (
        <>

        <Hero />

        <PowerOfCompounding />

        <JumpStart12 />

        <Simulator />

        <DeepDiveCta />

        <DeepDive40 />

        </>
    );
}
