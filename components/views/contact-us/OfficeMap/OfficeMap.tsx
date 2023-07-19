"use client";
import { useContext } from "react";
import { AdaptiveContext } from "../../../../context/AdaptiveContext";
import Container from "../../../../hoc/Container";
import { buttonStyles } from "../../../common/Button/Button";
import { CommercialAt, MarkSmal, PhoneColored, Facebook, Instagram, Whatsapp } from "../../../icons";
import Link from 'next/link';
import styles from "./OfficeMap.module.scss";
import Map from "../../../shared/Map";
import Marker from "./Marker.svg";
import { defaultCenter, mobileContainerStyle, containerStyle } from "./getData";

const OfficeMap = () => {

    const adaptive = useContext(AdaptiveContext);

    return (
        <Map center={defaultCenter} containerStyle={adaptive ? mobileContainerStyle : containerStyle} marks={[{ position: defaultCenter }]} markerIcon={Marker}>
            <Container className={styles.contact_us_container}>
                <div className={styles.contact_us_info}>
                    <h2 className={`section_header ${styles.section_header}`}>Contact Us</h2>
                    <div className={`${styles.contact_us_info_content}`}>
                        <p className={`${styles.contact_us_info_text} medium_text`}><CommercialAt /> info@neroliproperties.com</p>
                        <p className={`${styles.contact_us_info_text} medium_text icon_fill`}><PhoneColored /> 888-587-3025</p>
                        <p className={`${styles.contact_us_info_text} medium_text`}><MarkSmal /> 6116 Willa River Suite 610</p>
                    </div>
                    <div className={styles.contact_us_social_links}>
                        <span className="icon__hover"><Facebook /></span>
                        <span className="icon__hover"><Instagram /></span>
                        <span className="icon__hover"><Whatsapp /></span>
                    </div>
                    <Link href="/our-team" className={`${buttonStyles.button} ${buttonStyles.button__link}`}>Our team</Link>
                </div>
            </Container>
        </Map>
    )
}

export default OfficeMap