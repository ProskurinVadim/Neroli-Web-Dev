"use client";
import { useState } from "react";
import Link from 'next/link';
import { Search, Burger, LogoShort } from "../../icons";
import { Button } from "../../common";
import { links } from "./getData"


interface IHeader {
    isActive: (href: string) => boolean;
}

const HeaderMobile: React.FC<IHeader> = ({ isActive }) => {
    const [open, setOpen] = useState<boolean>(false);
    const toggleOpen = setOpen(prev => !prev);
    return (
        <>
            <LogoShort />
            <Search />
            <Button text={<Burger />} onClick={toggleOpen} className="" />
            <nav>
                <ul>
                    {open && links.map((elem, i) =>
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
            
        </>
    )
}

export default HeaderMobile