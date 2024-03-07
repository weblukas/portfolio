import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
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
            <body className="font-['Inter']">{children}
            <Toaster />
            </body>
        </html>
    );
}
