import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ActiveCountryContextProvider from "@/components/home/contexts/ActiveCountryContext";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Worldwide Wonders",
    description:
        "This project is helps you to learn about countries and their neighbours!",
    authors: [{ name: "Aytunç Demir" }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header></Header>
                <ActiveCountryContextProvider>
                    {children}
                </ActiveCountryContextProvider>
                <Footer></Footer>
            </body>
        </html>
    );
}
