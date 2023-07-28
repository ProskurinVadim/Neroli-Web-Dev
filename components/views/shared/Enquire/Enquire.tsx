"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import Container from "../../../../hoc/Container";
import Form, { formStyles } from "../.../../../../shared/Form/Form";
import { defaultData, getFormData } from "./getData";
import styles from "./Enquire.module.scss";
import useWidth from "../../../../hooks/useWidth";
import { isEmail, isFull, isPhone, containError, emailError, phoneError } from "../../../../utils/validation";

interface IForm {
    name: string,
    email: string,
    phone: string,
    adress: string,
}

interface IEnquire {
    top?: boolean
}
const Enquire: React.FC<IEnquire> = ({top}) => {
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

    const width = useWidth()

    return (
        <section className={` ${styles.enquire} ${top ? styles.enquire__top: ""}`}>
            <Container className={`${styles.notebook}`}>
                <div className={`${styles.notebook_item} section__padding`}>
                    {width >= 1024 && <h2 className={`section_header ${styles.section_header}`}>Enquire now</h2>}
                    <Form fields={fields} value={value} setValue={setValue} onSubmit={handelSubmit} className={formStyles.form__card} validate={validate} buttonText="Submit details">
                        <p className={formStyles.form_text}>
                            By clicking Submit, you agree to our
                            <Link className="text__underlining link_unset" href="/terms">Terms</Link>
                             &nbsp; & &nbsp;
                            <Link className="text__underlining link_unset" href="/terms">Privacy Policy</Link>.
                        </p>
                    </Form>
                </div>
                <div className={`${styles.notebook_item} section__padding`}>
                    {width < 1024 && <h2 className="section_header">Enquire now</h2>}
                    <p className={`medium_text medium_text__aditional ${styles.medium_text}`}>We have a waitlist of clients ready to view properties, extensive comparable community data and a trusted reputation. Just three of the reasons why people choose us.</p>
                    <div className={styles.enquire_image} />    
                </div>
            </Container>
        </section>
    )
}

export default Enquire