import FooterItem from "./FooterItem";
import { LogoShort, Whatsapp, Facebook, Instagram } from "../../icons";
import Container from "../../../hoc/Container";
import { aboutLinks, catigoriesLinks } from "../Header/getData";
import styles from "./Footer.module.scss"
import "../../../styles/reset.scss";
import FooterItemLogo from "./FooterItemLogo";
const Footer = () => {

    const contactList = ["info@neroliproperties.com", "888 - 587 - 3025", "6116 Willa River Suite 610"];
   
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_header_container}>
                <Container>
                    <h2 className={`${styles.footer_header}`}>
                        Experts in Real Estate Dubai
                    </h2>
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