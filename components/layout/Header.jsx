import React from 'react'
import CtaButton from '@components/shared/CtaButton';

const Header = () => {
    return (

        <header className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                <img src="/profit-acceleration-logo.png" alt="Profit Acceleration" className="h-14 w-auto" />
                </div>
                <nav className="hidden md:flex items-center space-x-6">
                <a href="#how-it-works" className="text-base text-gray-600 hover:text-navy">HOW IT WORKS</a>
                <a href="#jumpstart-12" className="text-base text-gray-600 hover:text-navy">JUMPSTART 12</a>

                <CtaButton variant="primary" className="!px-6 !py-2 !mb-0">Run The Simulator</CtaButton>
                </nav>
            </div>
            </div>{/* end .max-w-7xl */}
        </header>

    );
}

export default Header
