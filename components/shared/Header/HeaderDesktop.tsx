'use client';
import Link from 'next/link';
import { Search, Logo } from "../../icons";
import { links } from "./getData"
import styles from "./Header.module.scss";
import Button, { buttonStyles } from '../../common/Button/Button';
import SearchInput from "./Search";

interface IHeader {
    href: string;
}


const HeaderDesktop: React.FC<IHeader> = ({ href }) => {
    const onClick = () => false;
    console.log(styles);
    return (
        <>
            <Link href="/"><Logo /></Link>
            <nav>
                <ul className={styles.navbar}>
                    {links.map((elem, i) =>
                        <li className={`${styles.navbar_item} ${href === elem.href ? styles.active : ""}`} key={"link-item-" + i}>
                            <Link
                                href={elem.href}
                            >
                                {elem.name}
                            </Link>
                        </li>
                    )}
                    <li className={`${styles.navbar_item} ${styles.navbar_search}`}>
                        <SearchInput />
                    </li>
                </ul>
            </nav>
            <Link href="/book" className={`${buttonStyles.button} ${buttonStyles.button__link}`}>Enquire now</Link>
        </>
    )
}

export default HeaderDesktop