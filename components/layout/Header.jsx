/**
 * Header - Server Component
 *
 * Header containing PAS Logo and menu.
 * LinkToSection component used to allow anchor link with smooth scroll.
 */

import CtaButton from '@/components/shared/CtaButton';
import LinkToSection from '@/components/shared/LinkToSection';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
        <div className="px-4 py-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
            <img src="/profit-acceleration-logo.png" alt="Profit Acceleration" className="w-auto h-14" />
            </div>
            <nav className="items-center hidden space-x-6 md:flex">
              <LinkToSection href="/#jumpstart-12" scroll={false} className="text-base text-gray-800 hover:text-navy">
              JUMPSTART 12
              </LinkToSection>
              <LinkToSection href="/#simulator">
                  <CtaButton variant="primary" className="!px-6 !py-2 !mb-0">Run The Simulator</CtaButton>
              </LinkToSection>
            </nav>
        </div>
        </div>{/* end .max-w-7xl */}
    </header>
  );
}
