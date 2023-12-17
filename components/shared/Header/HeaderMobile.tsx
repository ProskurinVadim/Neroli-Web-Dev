"use client";
import { useState } from "react";
import Link from 'next/link';
import { Search, Burger, LogoShort } from "../../icons";
import { Button } from "../../common";
import { links } from "./getData";
import SearchInput from "./Search";
import Portal from "../../../hoc/Portal";
import styles from "./Header.module.scss";
import {buttonStyles} from "@/components/common/Button/Button";

interface IHeader {
    isActive: (href: string) => boolean;
}

const HeaderMobile: React.FC<IHeader> = ({ isActive }) => {
    const [open, setOpen] = useState<boolean>(false);
    const toggleOpen = () => {
        setOpen(prev => !prev);
    }
    const logoOpen = () => {
        setOpen(prev => false);
    }
    return (
        <>
            <Link href={"/"} >
                <span onClick={logoOpen}>
                    <LogoShort />
                </span>
            </Link>
            <div className={styles.navbar_icons}>
                <div className={styles.navbar_search}>
                    <SearchInput />
                </div>
                <span className={styles.burger_icons} onClick={toggleOpen}>
                    <Burger active={open} />
                </span>
                {
                    open && <Portal>
                        <nav className={styles.navbar_mobile}>
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
                                <Link href="/book" onClick={toggleOpen} className={`${buttonStyles.button} ${buttonStyles.button__link}`}>list with us</Link>
                            </ul>

                        </nav> 
                    </Portal>
                }
            </div>
            
            
        </>
    )
}

export default HeaderMobile