import CtaButton from '@/components/shared/CtaButton';

export default function Header() {
    return (

        <header className="bg-white border-b border-gray-200">
            <div className="px-4 py-4 mx-auto max-w-7xl">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                <img src="/profit-acceleration-logo.png" alt="Profit Acceleration" className="w-auto h-14" />
                </div>
                <nav className="items-center hidden space-x-6 md:flex">
                <a href="/" className="text-base text-gray-600 hover:text-navy">HOME</a>
                <a href="#jumpstart-12" className="text-base text-gray-600 hover:text-navy">JUMPSTART 12</a>

                <CtaButton variant="primary" className="!px-6 !py-2 !mb-0">Run The Simulator</CtaButton>
                </nav>
            </div>
            </div>{/* end .max-w-7xl */}
        </header>

    );
}
