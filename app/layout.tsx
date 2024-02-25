import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Web & Wolf",
    description: "Personal portfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="font-['Inter']">{children}</body>
        </html>
    );
}
