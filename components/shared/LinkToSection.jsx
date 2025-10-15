'use client';

import Link from "next/link";

export default function LinkToSection({ href, children }) {
  const handleClick = (event) => {
    // Check if the link is to a section on the same page
    if (href.startsWith('/#')) {
      const targetId = href.substring(2); // Remove '/#'
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        event.preventDefault(); // Prevent the default link behavior
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Link href={href} onClick={handleClick}>
      {children}
    </Link>
  );
}
