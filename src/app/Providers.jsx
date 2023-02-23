"use client";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="select-none">{children}</div>
    </ThemeProvider>
  );
}
