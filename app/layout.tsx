
import localFont from 'next/font/local';
import { IChildren } from "../types";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

const RootLayout: React.FC<IChildren> = ({ children }) => {
    return (
        <html lang="en" >
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
            <body>
                <Header />
                    {children}
                <Footer />
            </body>
        </html >
    )
}

export default RootLayout