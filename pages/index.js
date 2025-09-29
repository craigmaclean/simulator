import Hero from "../components/sections/Hero";
import PowerOfCompounding from "../components/sections/PowerOfCompounding";
import DeepDiveCta from "../components/sections/DeepDiveCta";
import CtaButton from "../components/shared/CtaButton";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import JumpStart12 from "../components/sections/JumpStart12";
import Simulator from "@/components/sections/Simulator";

export default function Home() {
    return (
        <>

        <Hero />

        <PowerOfCompounding />

        <JumpStart12 />

        {/* Profit Acceleration Simulator Section */}
        <section id="simulator" className="py-16">
            <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-h2-mobile md:text-h2-tablet lg:text-h2 leading-h2 font-bold text-navy text-center mb-12">Profit Acceleration Simulator</h2>
            {/* Input Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-8">
                <div className="lg:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Select Currency</label>
                    <select id="currency" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy">
                    <option value>Select...</option>
                    <option value="USD">US dollar – $</option>
                    <option value="CAD">Canadian dollars – CA$</option>
                    <option value="AUD">Australian dollars – AU$</option>
                    <option value="GBP">Pounds sterling – £</option>
                    <option value="EUR">Euro – €</option>
                    <option value="BDT">Bangladeshi taka – ৳</option>
                    <option value="BRL">Brazilian real – R$</option>
                    <option value="BGN">Bulgarian lev – лв</option>
                    <option value="CLP">Chilean peso – CL$</option>
                    <option value="CNY">Chinese yuan – ¥</option>
                    <option value="COP">Colombian peso – CO$</option>
                    <option value="HRK">Croatian kuna – kn</option>
                    <option value="CZK">Czech koruna – Kč</option>
                    <option value="DKK">Danish krone – kr</option>
                    <option value="AED">Emirati dirham – د.إ</option>
                    <option value="GEL">Georgian lari – ₾</option>
                    <option value="HKD">Hong Kong dollar – HK$</option>
                    <option value="HUF">Hungarian forint – ft</option>
                    <option value="INR">Indian rupee – ₹</option>
                    <option value="IDR">Indonesian rupiah – Rp</option>
                    <option value="ILS">Israeli shekel – ₪</option>
                    <option value="JPY">Japanese yen – ¥</option>
                    <option value="KES">Kenyan shilling – Ksh</option>
                    <option value="MYR">Malaysian ringgit – RM</option>
                    <option value="MXN">Mexican peso – MX$</option>
                    <option value="MAD">Moroccan dirham – د.م.</option>
                    <option value="NZD">New Zealand dollar – NZ$</option>
                    <option value="NGN">Nigerian naira – ₦</option>
                    <option value="NOK">Norwegian krone – kr</option>
                    <option value="PKR">Pakistani rupee – Rs</option>
                    <option value="PEN">Peruvian sol – S/.</option>
                    <option value="PHP">Philippine peso – ₱</option>
                    <option value="PLN">Polish zloty – zł</option>
                    <option value="RON">Romanian leu – lei</option>
                    <option value="RUB">Russian ruble – ₽</option>
                    <option value="RWF">Rwandan franc – FRw</option>
                    <option value="SGD">Singapore dollar – S$</option>
                    <option value="ZAR">South African rand – R</option>
                    <option value="KRW">South Korean won – ₩</option>
                    <option value="LKR">Sri Lankan rupee – Rs</option>
                    <option value="SEK">Swedish krona – kr</option>
                    <option value="CHF">Swiss franc – CHF</option>
                    <option value="THB">Thai baht – ฿</option>
                    <option value="TRY">Turkish lira – ₺</option>
                    <option value="UGX">Uganda shilling – Ush</option>
                    <option value="UAH">Ukrainian hryvna – ₴</option>
                    <option value="VND">Vietnamese dong – ₫</option>
                    <option value="ZMW">Zambian kwacha – ZK</option>
                    <option value="ZWL">Zimbabwean dollar – ZWL$</option>
                    </select>
                </div>
                <div className="lg:col-span-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Annual Revenue</label>
                    <input type="number" id="revenue" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy" defaultValue={0} min={0} />
                </div>
                <div className="lg:col-span-3">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Gross Profit Margin (%)</label>
                    <input type="number" id="grossMargin" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy" defaultValue={0} min={0} max={100} step="0.1" />
                </div>
                <div className="lg:col-span-3">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Net Profit Margin (%)</label>
                    <input type="number" id="netMargin" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy" defaultValue={0} min={0} max={100} step="0.1" />
                </div>
                </div>
                {/* Slider Section */}
                <div className="py-6">
                <h3 className="text-lg font-semibold text-navy text-center mb-4">Set % Impact Across All Areas</h3>
                <div className="flex items-center gap-4 justify-center">
                    <div className="flex-1 max-w-[70%]">
                    { /* <input type="range" id="impactSlider" className="impact-slider w-full" min={0} max={10} defaultValue={0} step="0.1" style={{-value: '0%'}} /> */ }
                    </div>
                    <span id="impactValue" className="text-2xl font-semibold text-navy min-w-[60px]">0%</span>
                </div>
                </div>
            </div>
            {/* Strategy Tables - Split into 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                    <thead>
                        <tr className="bg-navy text-white">
                        <th className="px-4 py-3 text-left">AREA</th>
                        <th className="px-4 py-3 text-center">% IMPACT</th>
                        <th className="px-4 py-3 text-right">PROFIT INCREASE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                        <td className="px-4 py-2 border-b">Cut Costs</td>
                        <td className="px-4 py-2 border-b text-center">
                            <input type="number" className="impact-input w-16 px-2 py-1 border border-gray-300 rounded" min={0} max={10} step="0.1" defaultValue={0} />
                        </td>
                        <td className="px-4 py-2 border-b text-right">$0</td>
                        </tr>
                        <tr className="bg-gray-50">
                        <td className="px-4 py-2 border-b">Market Dominating Position</td>
                        <td className="px-4 py-2 border-b text-center">
                            <input type="number" className="impact-input w-16 px-2 py-1 border border-gray-300 rounded" min={0} max={10} step="0.1" defaultValue={0} />
                        </td>
                        <td className="px-4 py-2 border-b text-right">$0</td>
                        </tr>
                        <tr className="bg-white">
                        <td className="px-4 py-2 border-b">Compelling Offer</td>
                        <td className="px-4 py-2 border-b text-center">
                            <input type="number" className="impact-input w-16 px-2 py-1 border border-gray-300 rounded" min={0} max={10} step="0.1" defaultValue={0} />
                        </td>
                        <td className="px-4 py-2 border-b text-right">$0</td>
                        </tr>
                        <tr className="bg-gray-50">
                        <td className="px-4 py-2 border-b">Increase Prices</td>
                        <td className="px-4 py-2 border-b text-center">
                            <input type="number" className="impact-input w-16 px-2 py-1 border border-gray-300 rounded" min={0} max={10} step="0.1" defaultValue={0} />
                        </td>
                        <td className="px-4 py-2 border-b text-right">$0</td>
                        </tr>
                        <tr className="bg-white">
                        <td className="px-4 py-2 border-b">Upsell &amp; Cross-sell</td>
                        <td className="px-4 py-2 border-b text-center">
                            <input type="number" className="impact-input w-16 px-2 py-1 border border-gray-300 rounded" min={0} max={10} step="0.1" defaultValue={0} />
                        </td>
                        <td className="px-4 py-2 border-b text-right">$0</td>
                        </tr>
                        <tr className="bg-gray-50">
                        <td className="px-4 py-2">Bundling</td>
                        <td className="px-4 py-2 text-center">
                            <input type="number" className="impact-input w-16 px-2 py-1 border border-gray-300 rounded" min={0} max={10} step="0.1" defaultValue={0} />
                        </td>
                        <td className="px-4 py-2 text-right">$0</td>
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
                        <th className="px-4 py-3 text-center">% IMPACT</th>
                        <th className="px-4 py-3 text-right">PROFIT INCREASE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                        <td className="px-4 py-2 border-b">Downsell</td>
                        <td className="px-4 py-2 border-b text-center">
                            <input type="number" className="impact-input w-16 px-2 py-1 border border-gray-300 rounded" min={0} max={10} step="0.1" defaultValue={0} />
                        </td>
                        <td className="px-4 py-2 border-b text-right">$0</td>
                        </tr>
                        <tr className="bg-gray-50">
                        <td className="px-4 py-2 border-b">Additional Products &amp; Services</td>
                        <td className="px-4 py-2 border-b text-center">
                            <input type="number" className="impact-input w-16 px-2 py-1 border border-gray-300 rounded" min={0} max={10} step="0.1" defaultValue={0} />
                        </td>
                        <td className="px-4 py-2 border-b text-right">$0</td>
                        </tr>
                        <tr className="bg-white">
                        <td className="px-4 py-2 border-b">Drip Campaign</td>
                        <td className="px-4 py-2 border-b text-center">
                            <input type="number" className="impact-input w-16 px-2 py-1 border border-gray-300 rounded" min={0} max={10} step="0.1" defaultValue={0} />
                        </td>
                        <td className="px-4 py-2 border-b text-right">$0</td>
                        </tr>
                        <tr className="bg-gray-50">
                        <td className="px-4 py-2 border-b">Alliances &amp; Joint Ventures</td>
                        <td className="px-4 py-2 border-b text-center">
                            <input type="number" className="impact-input w-16 px-2 py-1 border border-gray-300 rounded" min={0} max={10} step="0.1" defaultValue={0} />
                        </td>
                        <td className="px-4 py-2 border-b text-right">$0</td>
                        </tr>
                        <tr className="bg-white">
                        <td className="px-4 py-2 border-b">More Leads</td>
                        <td className="px-4 py-2 border-b text-center">
                            <input type="number" className="impact-input w-16 px-2 py-1 border border-gray-300 rounded" min={0} max={10} step="0.1" defaultValue={0} />
                        </td>
                        <td className="px-4 py-2 border-b text-right">$0</td>
                        </tr>
                        <tr className="bg-gray-50">
                        <td className="px-4 py-2">Digital Marketing</td>
                        <td className="px-4 py-2 text-center">
                            <input type="number" className="impact-input w-16 px-2 py-1 border border-gray-300 rounded" min={0} max={10} step="0.1" defaultValue={0} />
                        </td>
                        <td className="px-4 py-2 text-right">$0</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            {/* Results Section */}
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
            {/* CTA Button */}
            <div className="text-center">
                <CtaButton variant="primary">Send Me The Report</CtaButton>
            </div>
            </div>{/* end .max-w-7xl */}
        </section>{/* end #simulator */}


        <Simulator />

        <DeepDiveCta />

        {/* Deep Dive 40 Section (Hidden by default) */}
        <section id="deepDive40" className="py-16 bg-gray-50" style={{display: 'none'}}>
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
