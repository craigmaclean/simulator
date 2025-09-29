import React from 'react'

const PowerOfCompounding = () => {
    return (

        <section id="overlooked-power" className="py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    {/* Left Column - Image */}
                    <div className="order-2 md:order-1">
                    <img src="./principles-of-coumpounding.gif" alt="The First Principles of Compounding Wealth" className="w-full rounded-lg" />
                    </div>
                    {/* Right Column - Content */}
                    <div className="order-1 md:order-2">
                    <h2 className="text-h2-mobile md:text-h2-tablet lg:text-h2 leading-h2 font-bold text-navy mb-6">
                        The Overlooked Power of 1% Improvements
                    </h2>
                    <div className="space-y-4">
                        <p className="text-body text-gray-600 leading-relaxed">
                        What if your biggest opportunities for growth are already right in front of you, hidden in plain sight?
                        </p>
                        <p className="text-body text-gray-600 leading-relaxed">
                        The truth is, most businesses miss out on thousands of dollars in revenue &amp; profit every year. Not because of major failures, but because of small, overlooked inefficiencies that add up over time.
                        </p>
                        <p className="text-body text-gray-600 leading-relaxed">
                        This is where the power of compounding comes in. Small, strategic improvements in key areas of your business can create a compounding effect that leads to massive increases in profitability.
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default PowerOfCompounding
