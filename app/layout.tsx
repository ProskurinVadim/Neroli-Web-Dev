"use client"
import { AdaptiveContext } from "../context/AdaptiveContext";
import localFont from 'next/font/local';
import { IChildren } from "../types";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import useWidth from "../hooks/useWidth";

const RootLayout: React.FC<IChildren> = ({ children }) => {
    const width = useWidth()
    const adaptive = width >= 1440 ? "xl" : width >= 1024 ? "lg" : "mobile";
    const isActive = (href: string) => false;
    return (
        <html lang="en" >
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Montserrat&display=swap" rel="stylesheet" />
            <body className="body">
                <AdaptiveContext.Provider value={ adaptive }>
                    <Header />
                        {children}
                    <Footer />
                </AdaptiveContext.Provider>
            </body>
        </html >
    )
}

export default RootLayout