export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-white bg-navy">
      <div className="px-4 py-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-sm">
            &copy; {year} Profit Acceleration
          </p>
          <nav className="flex space-x-6 text-sm">
            <a
              href="/privacy"
              className="transition-colors duration-200 hover:text-gold"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="transition-colors duration-200 hover:text-gold"
            >
              Terms
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
