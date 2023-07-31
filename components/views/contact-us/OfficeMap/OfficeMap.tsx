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
import MobileMarker from "./MobileMarker.svg";
import { defaultCenter, mobileContainerStyle, containerStyle } from "./getData";
import { IContacts } from "@/types";

import socialLinks from "@/components/shared/Footer/FooterItemLogo/socialLinks";

const OfficeMap: React.FC<IContacts> = ({ email, address, phone }) => {

    const adaptive = useContext(AdaptiveContext);
    const center = adaptive === "mobile" ? { ...defaultCenter, lat: defaultCenter.lat + 0.007 } : defaultCenter;
    const marks = adaptive !== "mobile" ? [{ position: { ...defaultCenter, lng: defaultCenter.lng - 0.015 } }]
        : [{ position: defaultCenter }];

    const socialLinkElements = socialLinks.map(({id, icon, link}) => <Link key={id} target="_blank" href={link} className="icon__hover">
        {icon}
    </Link>);


    return (
        <Map
            center={center}
            containerStyle={adaptive === "mobile" ? mobileContainerStyle : containerStyle}
            marks={marks}
            markerIcon={adaptive === "mobile" ? MobileMarker : Marker}
        >
            <Container className={styles.contact_us_container}>
                <div className={styles.contact_us_info}>
                    <h2 className={`section_header ${styles.section_header}`}>Contact Us</h2>
                    <div className={`${styles.contact_us_info_content}`}>
                        <p className={`${styles.contact_us_info_text} medium_text`}><CommercialAt />{email}</p>
                        <p className={`${styles.contact_us_info_text} medium_text icon_fill`}><PhoneColored />{phone}</p>
                        <p className={`${styles.contact_us_info_text} medium_text`}><MarkSmal />{address}</p>
                    </div>
                    <div className={styles.contact_us_social_links}>
                        {socialLinkElements}
                        {/*<span className="icon__hover"><Facebook /></span>*/}
                        {/*<span className="icon__hover"><Instagram /></span>*/}
                        {/*<span className="icon__hover"><Whatsapp /></span>*/}
                    </div>
                    <Link href="/our-team" className={`${buttonStyles.button} ${buttonStyles.button__link}`}>Our team</Link>
                </div>
            </Container>
        </Map>
    )
}

export default OfficeMap