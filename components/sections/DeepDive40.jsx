"use client";

import React from 'react'

export default function DeepDive40() {
  return (
    <>
    {/* Deep Dive 40 Section (Hidden by default) */}
    {/* <section id="deepDive40" className="py-16 bg-gray-50" style={{display: 'none'}}> */ }
    <section id="deepDive40" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-h2-mobile md:text-h2-tablet lg:text-h2 font-bold text-navy text-center mb-12">Deep Dive 40 Areas of Impact</h2>
        {/* Deep Dive Slider Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="py-6">
            <h3 className="text-lg font-semibold text-navy text-center mb-4">Set % Impact Across Deep Dive 40 Areas</h3>
            <div className="flex items-center gap-4 justify-center">
                <div className="flex-1 max-w-[70%]">
                { /* <input type="range" id="deepDiveSlider" className="impact-slider w-full" min={0} max={10} defaultValue={0} step="0.1" style={{-value: '0%'}} /> */ }
                </div>
                <span id="deepDiveSliderValue" className="text-2xl font-semibold text-navy min-w-[60px]">0%</span>
            </div>
            </div>
        </div>
        {/* Deep Dive Strategy Tables */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Table */}
            <div className="overflow-x-auto">
                <table className="w-full">
                <thead>
                    <tr className="bg-navy text-white">
                    <th className="px-4 py-3 text-left">AREA</th>
                    <th className="px-4 py-3 text-right">PROFIT INCREASE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white">
                    <td className="px-4 py-2 border-b">Strategic Planning</td>
                    <td className="px-4 py-2 border-b text-right deep-dive-profit">$0</td>
                    </tr>
                    <tr className="bg-gray-50">
                    <td className="px-4 py-2 border-b">Trust, Expertise, Education</td>
                    <td className="px-4 py-2 border-b text-right deep-dive-profit">$0</td>
                    </tr>
                    <tr className="bg-white">
                    <td className="px-4 py-2 border-b">Policies &amp; Procedures</td>
                    <td className="px-4 py-2 border-b text-right deep-dive-profit">$0</td>
                    </tr>
                    <tr className="bg-gray-50">
                    <td className="px-4 py-2 border-b">Referral Systems</td>
                    <td className="px-4 py-2 border-b text-right deep-dive-profit">$0</td>
                    </tr>
                    <tr className="bg-white">
                    <td className="px-4 py-2 border-b">Publicity &amp; PR</td>
                    <td className="px-4 py-2 border-b text-right deep-dive-profit">$0</td>
                    </tr>
                    <tr className="bg-gray-50">
                    <td className="px-4 py-2 border-b">Direct Mail</td>
                    <td className="px-4 py-2 border-b text-right deep-dive-profit">$0</td>
                    </tr>
                    <tr className="bg-white">
                    <td className="px-4 py-2 border-b">Advertising</td>
                    <td className="px-4 py-2 border-b text-right deep-dive-profit">$0</td>
                    </tr>
                    <tr className="bg-gray-50">
                    <td className="px-4 py-2 border-b">Scripts</td>
                    <td className="px-4 py-2 border-b text-right deep-dive-profit">$0</td>
                    </tr>
                    <tr className="bg-white">
                    <td className="px-4 py-2 border-b">Initial Close Rate</td>
                    <td className="px-4 py-2 border-b text-right deep-dive-profit">$0</td>
                    </tr>
                    <tr className="bg-gray-50">
                    <td className="px-4 py-2 border-b">Follow-up Close Rate</td>
                    <td className="px-4 py-2 border-b text-right deep-dive-profit">$0</td>
                    </tr>
                    <tr className="bg-white">
                    <td className="px-4 py-2 border-b">Reactivate Former Customers</td>
                    <td className="px-4 py-2 border-b text-right deep-dive-profit">$0</td>
                    </tr>
                    <tr className="bg-gray-50">
                    <td className="px-4 py-2 border-b">More Appointments</td>
                    <td className="px-4 py-2 border-b text-right deep-dive-profit">$0</td>
                    </tr>
                    <tr className="bg-white">
                    <td className="px-4 py-2">Increase Frequency of Purchase</td>
                    <td className="px-4 py-2 text-right deep-dive-profit">$0</td>
                    </tr>
                </tbody>
                </table>
            </div>
            {/* Right Table */}
            <div className="overflow-x-auto">
                <table className="w-full">
                <thead>
                    <tr className="bg-navy text-white">
                    <th className="px-4 py-3 text-left">AREA</th>
                    <th className="px-4 py-3 text-right">PROFIT INCREASE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white">
                    <td className="px-4 py-2 border-b">Increase Longevity</td>
                    <td className="px-4 py-2 border-b text-right deep-dive-profit">$0</td>
                    </tr>
                    <tr className="bg-gray-50">
                    <td className="px-4 py-2 border-b">Sales Manager</td>
                    <td className="px-4 py-2 border-b text-right deep-dive-profit">$0</td>
                    </tr>
                    <tr className="bg-white">
                    <td className="px-4 py-2 border-b">Sales Compensation</td>
                    <td className="px-4 py-2 border-b text-right deep-dive-profit">$0</td>
                    </tr>
                    <tr className="bg-gray-50">
                    <td className="px-4 py-2 border-b">Superstars</td>
                    <td className="px-4 py-2 border-b text-right deep-dive-profit">$0</td>
                    </tr>
                    <tr className="bg-white">
                    <td className="px-4 py-2 border-b">Sales Training</td>
                    <td className="px-4 py-2 border-b text-right deep-dive-profit">$0</td>
                    </tr>
                    <tr className="bg-gray-50">
                    <td className="px-4 py-2 border-b">Prospecting &amp; Lists</td>
                    <td className="px-4 py-2 border-b text-right deep-dive-profit">$0</td>
                    </tr>
                    <tr className="bg-white">
                    <td className="px-4 py-2 border-b">Attracting Dream Clients</td>
                    <td className="px-4 py-2 border-b text-right deep-dive-profit">$0</td>
                    </tr>
                    <tr className="bg-gray-50">
                    <td className="px-4 py-2 border-b">Trade Shows</td>
                    <td className="px-4 py-2 border-b text-right deep-dive-profit">$0</td>
                    </tr>
                    <tr className="bg-white">
                    <td className="px-4 py-2 border-b">Dealing with Decision Makers</td>
                    <td className="px-4 py-2 border-b text-right deep-dive-profit">$0</td>
                    </tr>
                    <tr className="bg-gray-50">
                    <td className="px-4 py-2 border-b">Closing the Sale</td>
                    <td className="px-4 py-2 border-b text-right deep-dive-profit">$0</td>
                    </tr>
                    <tr className="bg-white">
                    <td className="px-4 py-2 border-b">Order Fulfillment</td>
                    <td className="px-4 py-2 border-b text-right deep-dive-profit">$0</td>
                    </tr>
                    <tr className="bg-gray-50">
                    <td className="px-4 py-2 border-b">Overcoming Buyer's Remorse</td>
                    <td className="px-4 py-2 border-b text-right deep-dive-profit">$0</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
        {/* Deep Dive Results Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-light-gray rounded-lg p-6 text-center">
            <h3 className="text-[1rem] font-semibold text-gray-600 mb-2 tracking-tight">CURRENT REVENUE</h3>
            <p id="currentRevenue" className="text-[2rem] font-semibold text-navy tracking-wide">$0</p>
            </div>
            <div className="bg-light-gray rounded-lg p-6 text-center">
            <h3 className="text-[1rem] font-semibold text-gray-600 mb-2 tracking-tight">CURRENT PROFIT</h3>
            <p id="currentProfit" className="text-[2rem] font-semibold text-navy tracking-wide">$0</p>
            </div>
            <div className="bg-light-gray rounded-lg p-6 text-center">
            <h3 className="text-[1rem] font-semibold text-gray-600 mb-2 tracking-tight">EXPECTED REVENUE INCREASE</h3>
            <p id="revenueIncrease" className="text-[2rem] font-semibold text-navy tracking-wide">$0</p>
            </div>
            <div className="bg-light-gray rounded-lg p-6 text-center">
            <h3 className="text-[1rem] font-semibold text-gray-600 mb-2 tracking-tight">EXPECTED ANNUAL GROSS REVENUE</h3>
            <p id="expectedRevenue" className="text-[2rem] font-semibold text-navy tracking-wide">$0</p>
            </div>
            <div className="bg-light-gray rounded-lg p-6 text-center">
            <h3 className="text-[1rem] font-semibold text-gray-600 mb-2 tracking-tight">EXPECTED NET PROFIT INCREASE</h3>
            <p id="profitIncrease" className="text-[2rem] font-semibold text-navy tracking-wide">$0</p>
            </div>
            <div className="bg-light-gray rounded-lg p-6 text-center">
            <h3 className="text-[1rem] font-semibold text-gray-600 mb-2 tracking-tight">EXPECTED 5-YEAR NET PROFIT IMPACT</h3>
            <p id="fiveYearImpact" className="text-[2rem] font-semibold text-navy tracking-wide">$0</p>
            </div>
        </div>
        </div>
    </section>{/* end #deepDive40 */}
    </>
  );
}
