"use client"
import { useState } from "react";
import FooterItem from "./FooterItem";
import { DownArrow, TopArrow } from "../../icons";
import Container from "../../../hoc/Container";
import { aboutLinks, catigoriesLinks } from "../Header/getData";
import styles from "./Footer.module.scss"
import "../../../styles/reset.scss";
import FooterItemLogo from "./FooterItemLogo";
const Footer = () => {
    const [open, setOpen] = useState<boolean>(false);
    const contactList = [{ name: "info@neroliproperties.com", href: "mailto: info@neroliproperties.com"}, { name: "888 - 587 - 3025", href: "tel:+888-587-3025" }, "6116 Willa River Suite 610"];
    const toggleOpen = () => setOpen(prev => !prev);
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_header_container} onClick={toggleOpen}>
                <Container>
                    <h2 className={`${styles.footer_header}`}>
                        Experts in Real Estate Dubai
                        <span>
                            {open ? <DownArrow /> : <TopArrow />}
                        </span>
                    </h2>
                    { open &&
                        <p className={`${styles.medium_text} medium_text`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis magna tellus, convallis eu egestas vitae, consectetur a sem. Nam egestas sodales ligula. Duis elementum ipsum vel urna fermentum bibendum. Aenean ex lectus, scelerisque laoreet lorem sed, blandit maximus purus. Duis ut venenatis quam, non tincidunt neque. Nunc elit erat, egestas quis neque vel, placerat blandit dui. Nullam non bibendum magna, non varius quam. Curabitur a ultricies urna. Suspendisse potenti. Praesent et erat arcu. Donec varius enim mi, eget pellentesque augue congue eu. Mauris vehicula, quam vel vehicula tempor, massa libero imperdiet dolor, eget iaculis justo velit non risus. Aliquam aliquam leo eget nunc vulputate pulvinar.
                        </p>
                    }
                </Container>
            </div>
           
            <div className={styles.footer_container}>
                <Container >
                    <ul className={styles.footer_list}>
                        <FooterItemLogo />
                        <FooterItem header="Contact" list={catigoriesLinks} />
                        <FooterItem header="About Form" list={aboutLinks} />
                        <FooterItem header="Categories" list={contactList} />
                    </ul>
                </Container>
            </div>
            <div className={styles.footer_additional_information}>
                <Container>
                    <p className="medium_text">Terms and Conditions</p>
                    <p className="medium_text medium_text__aditional">@ 2023 - Neroli Properties. All right reserved.</p>
                </Container>
            </div>
            
        </footer>
    )
}
export default Footer