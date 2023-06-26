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
    const isActive = () => false;
    return (
        <header className={styles.header}>
            <Container className={styles.header_container}>
                {adaptive ? <HeaderMobile isActive={isActive} /> : <HeaderDesktop href={""} />}
            </Container>
        </header>
    )
}

export default Header