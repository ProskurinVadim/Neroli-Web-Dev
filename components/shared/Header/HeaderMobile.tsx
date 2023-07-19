"use client";
import { useState } from "react";
import Link from 'next/link';
import { Search, Burger, LogoShort } from "../../icons";
import { Button } from "../../common";
import { links } from "./getData";
import SearchInput from "./Search";
import styles from "./Header.module.scss";

interface IHeader {
    isActive: (href: string) => boolean;
}

const HeaderMobile: React.FC<IHeader> = ({ isActive }) => {
    const [open, setOpen] = useState<boolean>(false);
    const toggleOpen = () => {
        setOpen(prev => !prev);
        document.body.style.overflowY = open ? "unset" : "hidden";
    }
    const logoOpen = () => {
        setOpen(prev => false);
        document.body.style.overflowY = open ? "unset" : "hidden";
    }
    return (
        <>
            <Link href={"/"} >
                <span onClick={logoOpen}>
                    <LogoShort />
                </span>
            </Link>
            <div className={styles.navbar_icons}>
                <SearchInput />
                <span className={styles.burger_icons} onClick={toggleOpen}>
                    <Burger active={open} />
                </span>
                {
                    open && <nav className={styles.navbar_mobile}>
                        <ul>
                            {links.map((elem, i) =>
                                <li
                                    className={`${styles.navbar_mobile_item} ${isActive(elem.href) ? styles.active : ""}`}
                                    onClick={toggleOpen}
                                    key={`link-item-${i}`}
                                >
                                    <Link
                                        href={elem.href}
                                        
                                    >
                                        {elem.name}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </nav>
                }
            </div>
            
            
        </>
    )
}

export default HeaderMobile