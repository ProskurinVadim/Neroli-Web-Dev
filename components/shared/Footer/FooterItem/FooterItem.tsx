import Link from 'next/link';
import { ILink } from "../../../../types";
import { Logo } from "../.../../../../icons"
import styles from "../Footer.module.scss";
interface IFooterItem {
    header: string,
    list: any[],
    children?: React.ReactNode | string | null,
}

const FooterItem: React.FC<IFooterItem> = ({ header, list, children}) => {
    return (
        <li className={styles.footer_item}>
            <h3 className={`small_section_header ${styles.small_section_header}`}>
                {header}
            </h3>
            {children}
            {
                list.map((elem, i) =>
                    <p key={`footer-item-${i}`} className={`medium_text ${styles.medium_text}`}>
                        {
                            typeof elem === "object" ?
                                <Link href={elem.href}>{elem.name}</Link>
                                : <>{elem}</>
                        }
                    </p>
                )
            }
        </li>
    )
}

export default FooterItem