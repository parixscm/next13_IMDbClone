import Header from "@/components/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-6xl px-12 py-4 sm:px-24 sm:py-10 sm:mx-auto">
        <Header />
        {children}
      </body>
    </html>
  );
}
