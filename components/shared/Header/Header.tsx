"use client"
import { useContext } from "react";
import { AdaptiveContext } from "../../../context/AdaptiveContext";
import { usePathname } from 'next/navigation';
import Container from "../../../hoc/Container";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";
import styles from "./Header.module.scss";
import "../../../styles/reset.scss"
import "../../../styles/global.scss"

const Header = () => {
    const adaptive = useContext(AdaptiveContext);
    const pathname = usePathname();
    const isActive = (href: string) => pathname === href;
    return (
        <header className={styles.header}>
            <Container className={styles.header_container}>
                {adaptive ? <HeaderMobile isActive={isActive} /> : <HeaderDesktop href={pathname} />}
            </Container>
        </header>
    )
}

export default Header