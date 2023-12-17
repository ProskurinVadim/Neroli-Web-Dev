"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import Form, { formStyles } from "../../.../../../../shared/Form/Form";
import { defaultData, getFormData } from "./getData";
import styles from "../Post.module.scss";
import { isEmail, isFull, isPhone, containError, emailError, phoneError, containFullNameError, containEmailError, containPhonelError } from "../../../../../utils/validation";

import CloseIcon from "./CloseIcon";

interface IForm {
    name: string,
    email: string,
    phone: string,
    adress: string,
}

interface IModal {
    onSubmit: (value: IForm) => void
    onClose: () => void,
    adress: string
}
const BookingModal: React.FC<IModal> = ({ onSubmit, onClose, adress }) => {
    const [value, setValue] = useState<IForm>({ ...defaultData, adress })
    const fields: any = getFormData();
    const handelSubmit = () => validate(value);
    const { push } = useRouter();

    const validate = (value: IForm) => {
        const containFullName = isFull(value.name);
        const containEmail = isFull(value.email);
        const containPhone = isFull(value.phone);

        const emailErr = !isEmail(value.email);
        const phoneErr = !isPhone(value.phone);

        const errorArr = [];

        if(!containFullName) {
            errorArr.push(containFullNameError);
        } else {
            errorArr.push("");
        }
        if(!containEmail) {
            errorArr.push(containEmailError);
        } else if(emailErr) {
            errorArr.push(emailError);
        } else {
            errorArr.push("");
        }

        if(!containPhone) {
            errorArr.push(containPhonelError);
        } else if(phoneErr) {
            errorArr.push(phoneError);
        }else {
            errorArr.push("");
        }

        errorArr.push("");

        if(errorArr.join("")) {
            return errorArr;
        }

        push("/thank-you");
        return ["", "", "" , ""];
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