import JumpStartGrid from "@/components/jumpstart12/JumpStartGrid";

export default function JumpStart12() {
    return (

        <section id="jumpstart-12" className="py-16 bg-light-blue">
            <div className="px-4 mx-auto max-w-7xl">
            <div className="mb-12 text-center">
                <h2 className="mb-4 font-bold text-h2-mobile md:text-h2-tablet lg:text-h2 leading-h2 text-navy">
                The JumpStart 12 Operating System
                </h2>
                <p className="max-w-2xl mx-auto leading-relaxed text-gray-600 text-body">
                We've identified 12 core areas - the JumpStart 12 - that have the biggest impact on a business' bottom line. By focusing on these areas, you can create a powerful operating system to install in your business for sustainable, long-term growth.
                </p>
            </div>

            <JumpStartGrid />

            </div>
        </section>

    );
}
