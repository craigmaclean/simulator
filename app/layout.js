import "./globals.css";
import Providers from "@/components/Providers";

export const metadata = {
  title: "Profit Acceleration Software™ Simulator",
  description: "Unlock the power of compounding growth in your business, through our Profit Acceleration Simulator.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Client-only providers (Sonner Toaster, etc.) */}
        <Providers>{children}</Providers>
        {/*<Footer />*/}
      </body>
    </html>
  );
}
