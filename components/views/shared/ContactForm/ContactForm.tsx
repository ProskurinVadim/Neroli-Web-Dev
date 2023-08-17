"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import Container from "../../../../hoc/Container";
import Form from "../../../shared/Form";
import { getFormData, defaultData } from "./getData";
import styles from "./ContactForm.module.scss";
import { isEmail, emailError } from "../../../../utils/validation";

interface IForm {
    email: string,
    name: string
}

const ContactForm = ({ }) => {
    const [value, setValue] = useState<IForm>({ ...defaultData })
    const fields: any = getFormData();
    const handelSubmit = () => console.log(value);
    const { push } = useRouter();

    const validate = (value: IForm) => {
        const emailErr = !isEmail(value.email);
        if (emailErr) {
            return ["", emailError]
        } else {
            push("/thank-you");
            return ["", ""]
        }
    }

    return (
        <section className={styles.contact_form}>
            <Container>
                <div className={styles.contact_form_content}>
                    <div className={styles.text_block}>
                        <h3 className={`section_header section_header__light ${styles.text_block_header}`}>Stay updated</h3>
                        <p className={`medium_text medium_text__light ${styles.medium_text}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim. sed do eiusmod tempor incididunt.</p>
                    </div>
                    <Form className={styles.form} fields={fields} setValue={setValue} value={value} onSubmit={handelSubmit} validate={validate} buttonText="Subscribe" />
                </div>
            </Container>
        </section>
    )
};

export default ContactForm