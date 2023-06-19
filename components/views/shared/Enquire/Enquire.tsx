"use client";
import { useState } from "react";
import Container from "../../../../hoc/Container";
import Form, { formStyles } from "../.../../../../shared/Form/Form";
import Image from "../../../common/Image";
import { defaultData, getFormData } from "./getData";
import styles from "./Enquire.module.scss";
interface IForm {
    name: string,
    email: string,
    phone: string,
    adress: string,
}


const Enquire = () => {
    const [value, setValue] = useState<IForm>({ ...defaultData})
    const fields: any = getFormData();
    const handelSubmit = () => console.log("Enquire", value);
    console.log(styles)
    return (
        <section className={styles.enquire}>
            <Container className={styles.notebook}>
                <div className={styles.notebook_item}>
                    <h2 className="section_header">Enquire now</h2>
                    <Form fields={fields} value={value} setValue={setValue} onSubmit={handelSubmit} className={formStyles.form__card}>
                        <p className={formStyles.form_text}>By clicking Submit, you agree to our
                            Terms & Privacy Policy.</p>
                    </Form>
                </div>
                <div className={styles.notebook_item}>
                    <p className={`medium_text medium_text__aditional ${styles.medium_text}`}>We have a waitlist of clients ready to view properties, extensive comparable community data and a trusted reputation. Just three of the reasons why people choose us.</p>
                    <div className={styles.enquire_image} />
                </div>
            </Container>
        </section>
    )
}

export default Enquire