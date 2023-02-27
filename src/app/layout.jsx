import Header from "@/components/Header";
import Providers from "./Providers";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-6xl min-h-screen px-12 py-4 transition-colors duration-300 text-gray-700 sm:px-24 sm:py-10 sm:mx-auto dark:bg-gray-700 dark:text-gray-200">
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
