import Header from "@/components/Header";
import Providers from "./Providers";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen transition-colors duration-300 max-w-6xl px-12 py-4 text-gray-700 sm:px-24 sm:py-10 sm:mx-auto dark:bg-gray-700 dark:text-gray-200">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
