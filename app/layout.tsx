import { Inter } from 'next/font/google'
import { IChildren } from "../types";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
const inter = Inter({ subsets: ['latin'] })



const RootLayout: React.FC<IChildren> = ({ children }) => {
    return (
        <html lang="en" >
            <body className={inter.className}>
                <Header />
                    {children}
                <Footer />
            </body>
        </html >
    )
}

export default RootLayout