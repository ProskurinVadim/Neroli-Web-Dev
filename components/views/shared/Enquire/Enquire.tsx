"use client";
import { useState } from "react";
import Container from "../../../../hoc/Container";
import Form, { formStyles } from "../.../../../../shared/Form/Form";
import Image from "../../../common/Image";
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


const Enquire = () => {
    const [value, setValue] = useState<IForm>({ ...defaultData})
    const fields: any = getFormData();
    const handelSubmit = () => console.log("Enquire", value);

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
            return ["", "", "" , ""]
        }
    }

    const width = useWidth()

    return (
        <section className={styles.enquire}>
            <Container className={`${styles.notebook}`}>
                <div className={`${styles.notebook_item} section__padding`}>
                    {width >= 1024 && <h2 className={`section_header ${styles.section_header}`}>Enquire now</h2>}
                    <Form fields={fields} value={value} setValue={setValue} onSubmit={handelSubmit} className={formStyles.form__card} validate={validate}>
                        <p className={formStyles.form_text}>By clicking Submit, you agree to our <span className="text__underlining">Terms</span> & <span className="text__underlining">Privacy Policy</span>.</p>
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