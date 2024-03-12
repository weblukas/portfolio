import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
export const metadata: Metadata = {
    title: "Web & Wolf",
    description: " Lukasz Szmyd front-end developer portfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="font-['Open Sans']">
                {children}
                <Toaster />
            </body>
        </html>
    );
}
