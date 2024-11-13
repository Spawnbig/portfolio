"use client";

import { ThemeProvider } from "@/context/theme_context";

export function Providers({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
