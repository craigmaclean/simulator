'use client';

import Link from "next/link";

export default function LinkToSection({ href, children }) {
  const handleClick = (event) => {
    // Check if the link is to a section on the same page
    if (href.startsWith('/#') || href.startsWith('#')) {
      event.preventDefault(); // Prevent the default link behavior

      // Extract the target ID
      let targetId;
      if (href.startsWith('/#')) {
        targetId = href.substring(2); // Remove '/#'
      } else if (href.startsWith('#')) {
        targetId = href.substring(1); // Remove '#'
      }

      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <Link href={href} onClick={handleClick}>
      {children}
    </Link>
  );
}
