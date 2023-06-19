"use client";
import Container from "../../../../hoc/Container";
import { Button } from "../../../common";
import { CommercialAt, Mark, PhoneColored, Facebook, Instagram, Whatsapp } from "../../../icons";
import styles from "./Map.module.scss";

const Map = () => {
    const handelSubmit = () => console.log("asd");
    return (
        <section className={styles.contact_us}>
            <Container className={styles.contact_us_container}>
                <div className={styles.contact_us_info}>
                    <h2 className={`section_header ${styles.section_header}`}>Contact Us</h2>
                    <div>
                        <p className={`${styles.contact_us_info_text} medium_text`}><CommercialAt /> info@neroliproperties.com</p>
                        <p className={`${styles.contact_us_info_text} medium_text icon_fill`}><PhoneColored /> 888-587-3025</p>
                        <p className={`${styles.contact_us_info_text} medium_text`}><Mark /> 6116 Willa River Suite 610</p>
                    </div>
                    <div className={styles.contact_us_social_links}>
                        <Facebook />
                        <Instagram />
                        <Whatsapp />
                    </div>
                    <Button onClick={handelSubmit} text="Our Team" />
                </div>
            </Container>
        </section>
    )
}

export default Map