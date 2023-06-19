import Link from 'next/link';
import { ILink } from "../../../../types";
import { Logo } from "../.../../../../icons"
import styles from "../Footer.module.scss";
import { LogoShort, Whatsapp, Facebook, Instagram } from "../../../icons";

const FooterItemLogo: React.FC = () => {
    return (
        <li className={styles.footer_item}>
            <h3 className={`small_section_header ${styles.small_section_header}`}>
                <Logo />
            </h3>
            <p className={`${styles.footer_description}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam.
            </p>
            <div className={styles.footer_social_links}>
                <Facebook />
                <Instagram />
                <Whatsapp />
            </div>
        </li>
    )
}

export default FooterItemLogo