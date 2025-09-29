import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-sm">
            © {year} Profit Acceleration
          </p>
          <nav className="flex space-x-6 text-sm">
            <a
              href="/privacy"
              className="hover:text-gold transition-colors duration-200"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="hover:text-gold transition-colors duration-200"
            >
              Terms
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
