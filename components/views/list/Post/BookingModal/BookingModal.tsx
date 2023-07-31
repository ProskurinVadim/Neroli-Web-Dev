"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import Form, { formStyles } from "../../.../../../../shared/Form/Form";
import { defaultData, getFormData } from "./getData";
import styles from "../Post.module.scss";
import { isEmail, isFull, isPhone, containError, emailError, phoneError } from "../../../../../utils/validation";

import CloseIcon from "./CloseIcon";

interface IForm {
    name: string,
    email: string,
    phone: string,
    adress: string,
}

interface IModal {
    onSubmit: (value: IForm) => void
    onClose: () => void
}
const BookingModal: React.FC<IModal> = ({ onSubmit, onClose }) => {
    const [value, setValue] = useState<IForm>({ ...defaultData })
    const fields: any = getFormData();
    const handelSubmit = () => validate(value);
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
            onClose();
            onSubmit(value)
            return ["", "", "", ""]
        }
    }

    const ref = useRef<any>(null);
    useEffect(() => {
        const handleOutSideClick = (event: any) => {
            if (!ref.current?.contains(event.target)) {
                onClose();
            }
        };

        window.addEventListener("mousedown", handleOutSideClick);

        return () => {
            window.removeEventListener("mousedown", handleOutSideClick);
        };
    }, [ref]);

    return (
        <div className={styles.booking_modal} ref={ref}>
            <span className={styles.closeIcon} onClick={onClose}>
                 <CloseIcon />
            </span>
            <div className={styles.booking_modal_image} />
            <Form fields={fields} value={value} setValue={setValue} onSubmit={handelSubmit} className={`${styles.booking_modal_form}`} validate={validate} buttonText="Submit details">
                <p className={styles.booking_modal_text}>
                    By clicking Submit, you agree to our&nbsp;
                    <Link className="text__underlining link_unset" href="/terms">Terms</Link>
                    &nbsp; & &nbsp;
                    <Link className="text__underlining link_unset" href="/privacy-policy">Privacy Policy</Link>.
                </p>
            </Form>
        </div>
    )
}

export default BookingModal