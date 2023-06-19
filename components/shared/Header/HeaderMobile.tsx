"use client";
import { useState } from "react";
import Link from 'next/link';
import { Search, Burger, LogoShort } from "../../icons";
import { Button } from "../../common";
import { links } from "./getData"
import styles from "./Header.module.scss";

interface IHeader {
    isActive: (href: string) => boolean;
}

const HeaderMobile: React.FC<IHeader> = ({ isActive }) => {
    const [open, setOpen] = useState<boolean>(false);
    const toggleOpen = () => setOpen(prev => !prev);
    return (
        <>
            <LogoShort />
            <div onClick={toggleOpen} className={styles.navbar_icons}>
                <span>
                    <Search />
                </span>
                <span className={styles.burger_icons}>
                    <Burger />
                </span>
                <nav>
                    <ul>
                        {false && links.map((elem, i) =>
                            <Link
                                key={`link-item-+${i}`}
                                href={elem.href}
                                className={`${isActive(elem.href) ? "active" : ""}`}
                            >
                                {elem.name}
                            </Link>
                        )}
                    </ul>
                </nav>
            </div>
            
            
        </>
    )
}

export default HeaderMobile