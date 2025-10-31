import "./globals.css";
import Providers from "@/components/Providers";

export const metadata = {
  title: "Profit Acceleration",
  description: "Simulator and growth operating system",
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
