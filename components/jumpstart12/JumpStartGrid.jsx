import React from 'react'
import JumpStartCard from '@components/jumpstart12/JumpStartCard';

const JumpStartGrid = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* All 12 cards with updated font sizes */}
            <JumpStartCard title="Cut Costs" description="Reduce unnecessary expenses &amp; improve efficiency." />

            <JumpStartCard title="Market-Dominating Position" description="Stand out from the competition &amp; become the obvious choice for your ideal customers." />

            <JumpStartCard title="Compelling Offer" description="Craft offers that resonate strongly with your audience." />

            <JumpStartCard title="Increase Prices" description="Maximize your profitability by strategically adjusting your pricing structure." />

            <JumpStartCard title="Upsell &amp; Cross-Sell" description="Leverage relevant add-ons &amp; complementary offers to improve the value of each customer." />

            <JumpStartCard title="Bundling" description="Package your products or services to increase perceived value that encourages larger purchases." />

            <JumpStartCard title="Downsell" description="Avoid losing price-sensitive customers by offering lower-priced alternatives." />

            <JumpStartCard title="Additional Products &amp; Services" description="Solve more problems for your existing customers &amp; increase their LTV by expanding what you sell" />

            <JumpStartCard title="Drip Campaign" description="Nurture leads through regular, consistent communication to keep your business top-of-mind when they're ready to purchase." />

            <JumpStartCard title="Alliances &amp; Joint Ventures" description="Partnering with other businesses can be a powerful way to reach a new audience." />

            <JumpStartCard title="More Leads" description="Consistently generate a flow of qualified leads." />

            <JumpStartCard title="Digital Marketing" description="Leverage online channels to scale visibility &amp; reach." />
        </div>
    );
}

export default JumpStartGrid
