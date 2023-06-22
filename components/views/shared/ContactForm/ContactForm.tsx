"use client";
import { useState } from "react";
import Container from "../../../../hoc/Container";
import Form from "../../../shared/Form";
import { getFormData, defaultData } from "./getData";
import styles from "./ContactForm.module.scss";

interface IForm {
    email: string,
    name: string
}
interface IContactForm {
    isBottom?: boolean
}
const ContactForm: React.FC<IContactForm> = ({ isBottom }) => {
    const [value, setValue] = useState<IForm>({ ...defaultData })
    const fields: any = getFormData();
    const handelSubmit = () => console.log(value);

    return (
        <section className={`${styles.contact_form} ${isBottom ? styles.contact_form__bottom : ""}`}>
            <Container className={styles.contact_form_content}>
                <div className={styles.contact_form_text_block}>
                    <h3 className={`section_header section_header__light ${styles.section_header}`}>Stay updated</h3>
                    <p className={`medium_text medium_text__light ${styles.medium_text}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim. sed do eiusmod tempor incididunt.</p>
                </div>
                <Form fields={fields} setValue={setValue} value={value} onSubmit={handelSubmit} />
            </Container>
        </section>
    )
};

export default ContactForm