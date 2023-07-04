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
    return (
        <>
            <LogoShort />
            <div className={styles.navbar_icons}>
                <SearchInput />
                <span className={styles.burger_icons} onClick={toggleOpen}>
                    <Burger active={open} />
                </span>
                {
                    open && <nav className={styles.navbar_mobile}>
                        <ul>
                            {links.map((elem, i) =>
                                <Link
                                    key={`link-item-+${i}`}
                                    href={elem.href}
                                    className={`${styles.navbar_mobile_item} ${isActive(elem.href) ? styles.active : ""}`}
                                >
                                    {elem.name}
                                </Link>
                            )}
                        </ul>
                    </nav>
                }
            </div>
            
            
        </>
    )
}

export default HeaderMobile