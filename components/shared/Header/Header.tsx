"use client"
import { usePathname } from 'next/navigation';
import Container from "../../../hoc/Container";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";
import styles from "./Header.module.scss";
import "../../../styles/reset.scss"
import useWidth from "../../../hooks/useWidth";
import "../../../styles/global.scss"

const Header = () => {
    const width = useWidth()
    const isActive = (href: string) => false;
    return (
        <header className={styles.header}>
            <Container className={styles.header_container}>
                {width <= 1024 ? <HeaderMobile isActive={isActive} /> : <HeaderDesktop href={""} />}
            </Container>
        </header>
    )
}

export default Header