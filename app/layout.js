// app/layout.js
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/Providers";

export const metadata = {
  title: "Profit Acceleration",
  description: "Simulator and growth operating system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/* Client-only providers (Sonner Toaster, etc.) */}
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
