"use client"

import { useContext } from "react";
import { AdaptiveContext } from "../../../context/AdaptiveContext";
import { usePathname, useSearchParams } from 'next/navigation';
import Container from "../../../hoc/Container";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";
import styles from "./Header.module.scss";

import "../../../styles/reset.scss";
import "../../../styles/global.scss";

const Header = () => {
    const adaptive = useContext(AdaptiveContext);
    const searchParams = useSearchParams()
    const type = searchParams.get("type")
    const pathname = usePathname();
    const href = type ? `${pathname}?type=${type}` : pathname
    const isActive = (_href: string) => href === _href;

    return (
        <header className={styles.header}>
            <Container className={styles.header_container}>
                {(adaptive === "mobile" || adaptive === "tablet") && <HeaderMobile isActive={isActive} />}
                {(adaptive === "desktop" || adaptive === "desktop-large") && <HeaderDesktop href={href} />}
            </Container>
        </header>
    )
}

export default Header