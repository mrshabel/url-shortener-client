import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "URL Shortener",
    description: "A simple tool to shorten long urls",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`min-h-screen w-screen bg-[radial-gradient(#d2d6db_1px,transparent_1px)] dark:bg-[radial-gradient(#363636_1px,transparent_1px)] [background-size:30px_30px] ${inter.className}`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
