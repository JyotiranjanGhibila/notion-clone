import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion Clone",
  description: "All-in-one workspace for you and your team.",
  icons: {
    icon: [
      {
        media: "(prefers-color-schema: light)",
        url: "/notion.svg",
        href: "/notion.svg",
      },
      {
        media: "(prefers-color-schema: dark)",
        url: "/notion.svg",
        href: "/notion.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="notion-theme-2"
        >{children}</ThemeProvider>
      </body>
    </html>
  );
}
