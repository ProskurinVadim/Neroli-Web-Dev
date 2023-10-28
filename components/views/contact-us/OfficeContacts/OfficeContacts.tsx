"use client";
import React, {useContext, useState} from "react";
import { AdaptiveContext } from "../../../../context/AdaptiveContext";
import Container from "../../../../hoc/Container";
import { buttonStyles } from "../../../common/Button/Button";
import { CommercialAt, MarkSmal, PhoneColored, Facebook, Instagram, Whatsapp } from "../../../icons";
import Link from 'next/link';
import styles from "./OfficeContacts.module.scss";
import Map from "../../../shared/Map";
import Marker from "./Marker.svg";
import MobileMarker from "./MobileMarker.svg";
import { defaultCenter, mobileContainerStyle, containerStyle, defaultData, getFormData } from "./getData";
import Form, { formStyles } from "./FormContacts/Form"
import { IContacts } from "@/types";

import socialLinks from "@/components/shared/Footer/FooterItemLogo/socialLinks";
import {useRouter} from "next/navigation";
import {containError, emailError, isEmail, isFull, isPhone, phoneError} from "@/utils/validation";

interface IForm {
    name: string,
    email: string,
    phone: string,
    subject: string,
    adress: string,
}

const OfficeContacts: React.FC<IContacts> = ({ email, address, phone }) => {
    const [value, setValue] = useState<IForm>({ ...defaultData})
    const fields: any = getFormData();
    const handelSubmit = () => console.log("Enquire", value);

    const { push } = useRouter();

    const validate = (value: IForm) => {
        const containPhone = isFull(value.phone);
        const containEmail = isFull(value.email);
        const containOne = containPhone || containEmail;
        const containBoth = containPhone && containEmail;
        const emailErr = !isEmail(value.email);
        const phoneErr = !isPhone(value.phone);

        if (!containOne) {
            return ["", containError, containError, ""]
        } else if (emailErr && phoneErr && containBoth) {
            return ["", emailError, phoneError, ""]
        } else if (containEmail && emailErr) {
            return ["", emailError, "", ""]
        } else if (containPhone && phoneErr) {
            return ["", "", phoneError, ""]
        } else {
            push("/thank-you");
            return ["", "", "" , ""]
        }
    }

    const adaptive = useContext(AdaptiveContext);
    const center = adaptive === "mobile" ? { ...defaultCenter, lat: defaultCenter.lat + 0.007 } : defaultCenter;
    const marks = adaptive !== "mobile" ? [{ position: { ...defaultCenter, lng: defaultCenter.lng - 0.015 } }]
        : [{ position: defaultCenter }];

    const socialLinkElements = socialLinks.map(({id, icon, link}) => <Link key={id} target="_blank" href={link} className="icon__hover">
        {icon}
    </Link>);


    return (
            <Container className={styles.contact_us_container}>
                <div className={styles.contact_us_form}>
                    <h2 className={`section_header ${styles.section_header}`}>Get in touch</h2>
                    <p className={`${styles.form_text} medium_text`}>Complete the form below, and your message will be promptly delivered to the appropriate Neroli Properties staff member who will contact you in the next 24 hours.</p>
                    <p className={`${styles.form_text} medium_text`}>If you require immediate assistance, please don't hesitate to call us on +971 58 52 333 52.</p>

                    <Form fields={fields} value={value} setValue={setValue} onSubmit={handelSubmit} validate={validate} buttonText="Submit enquiry">
                        <></>
                    </Form>
                </div>
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
    )
}

export default OfficeContacts