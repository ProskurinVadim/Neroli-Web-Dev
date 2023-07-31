import Link from 'next/link';
import { useContext } from "react";
import { AdaptiveContext } from "../../../../context/AdaptiveContext";
import { ILink } from "../../../../types";
import styles from "../Footer.module.scss";
import { LogoShortUnfill, Whatsapp, Facebook, Instagram, Linkedin, Viber, Threads, Twitter, Uaddme, LogoShort } from "../../../icons";

import socialLinks from "./socialLinks";

const FooterItemLogo: React.FC = () => {

    const adaptive = useContext(AdaptiveContext);

    const socialLinkElements = socialLinks.map(({id, icon, link}) => <Link key={id} target="_blank" href={link} className="icon__hover">
                                                                                                    {icon}
                                                                                                </Link>);

    return (
        <li className={styles.footer_item}>

            <Link href="/" className="link_unset">
                <h3 className={`small_section_header ${styles.small_section_header}`}>
                    {adaptive === "mobile" ? <LogoShort /> : <LogoShortUnfill />}
                </h3>
            </Link>
            <p className={`${styles.footer_description}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam.
            </p>
            <div className={styles.footer_social_links}>
                {socialLinkElements}
                {/*<span className="icon__hover">*/}
                {/*    <Facebook />*/}
                {/*</span>*/}
                {/*<span className="icon__hover">*/}
                {/*    <Instagram />*/}
                {/*</span>*/}
                {/*<span className="icon__hover">*/}
                {/*    <Whatsapp />*/}
                {/*</span>*/}
            </div>
        </li>
    )
}

export default FooterItemLogo