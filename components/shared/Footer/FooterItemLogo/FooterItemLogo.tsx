import Link from 'next/link';
import { useContext } from "react";
import { AdaptiveContext } from "../../../../context/AdaptiveContext";
import { ILink } from "../../../../types";
import styles from "../Footer.module.scss";
import { LogoShortUnfill, Whatsapp, Facebook, Instagram, LogoShort } from "../../../icons";

const FooterItemLogo: React.FC = () => {

    const adaptive = useContext(AdaptiveContext);

    return (
        <li className={styles.footer_item}>
            <h3 className={`small_section_header ${styles.small_section_header}`}>
                {adaptive ? <LogoShort /> : <LogoShortUnfill />}
            </h3>
            <p className={`${styles.footer_description}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam.
            </p>
            <div className={styles.footer_social_links}>
                <span className="icon__hover">
                    <Facebook />
                </span>
                <span className="icon__hover">
                    <Instagram />
                </span>
                <span className="icon__hover">
                    <Whatsapp />
                </span>
            </div>
        </li>
    )
}

export default FooterItemLogo