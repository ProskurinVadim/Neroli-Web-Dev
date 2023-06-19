'use client';
import Link from 'next/link';
import { Search, Logo } from "../../icons";
import { links } from "./getData"
import styles from "./Header.module.scss";
import { Button } from '../../common';

interface IHeader {
    href: string;
}


const HeaderDesktop: React.FC<IHeader> = ({ href }) => {
    const onClick = () => false;
    return (
        <>
            <Link href="/"><Logo /></Link>
            <nav>
                <ul className={styles.navbar}>
                    {links.map((elem, i) =>
                        <li className={`${styles.navbar_item} ${href === elem.href ? "active" : ""}`} key={"link-item-" + i}>
                            <Link
                                href={elem.href}
                            >
                                {elem.name}
                            </Link>
                        </li>
                    )}
                    <li className={`${styles.navbar_item} ${styles.navbar_search}`}>
                        <Search />
                    </li>
                </ul>
            </nav>
            <Button onClick={onClick} text={<Link href="/book">Enquire now</Link>} />
        </>
    )
}

export default HeaderDesktop