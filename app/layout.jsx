import { Inter } from "next/font/google";
import "./globals.css";
import "../assets/css/satoshi.css";
import Header from "@/components/general/Header";
import Sidebar from "@/components/general/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Safwan P | Software Engineer",
    description: "Safwan P | Software Engineer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <section id="content flex gap-[20px]">
                    <Sidebar />
                    {children}
                </section>
            </body>
        </html>
    );
}
