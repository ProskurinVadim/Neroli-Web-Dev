"use client";
import { useState } from "react";
import { Button } from "../../../common";
import Toggler, { togglerStyles} from "../../../common/Toggler/Toggler";
import Form, { formStyles } from "../../../shared/Form/Form";
import Link from 'next/link';
import Container from "../../../../hoc/Container";
import { IFormFields } from "../../../../types";
import styles from "./Main.module.scss";
import { defaultData, getFormData } from "./getData";
interface IForm {
    building: string,
    commercial: string,
    off_plan: string
}


export default function Home() {
    const [active, setActive] = useState<string>("Residential");
    const [value, setValue] = useState<IForm>({ ...defaultData });
    const fields: any = getFormData();

    const handelSetActive = (active: string) => setActive(_ => active);
    const handelSubmit = () => console.log(value);
    const onClick = () => false;
    return (
        <section className={`${styles.main_page}`}>
            <Container>
                <h2 className="small_section_header small_section_header__light">Welcome to Form Estate</h2>
                <h1 className={styles.main_header}>Find your property</h1>
                <div className={`${styles.toggler_container}`} >
                    <Toggler array={["Residential", "Commercial", "Off-Plan"]} active={active} setActive={handelSetActive} className={`${styles.toggler} ${togglerStyles.toggler__fill}`} />
                </div>
                <Form fields={fields} onSubmit={handelSubmit} value={value} setValue={setValue} className={formStyles.form__search} buttonText="Search"/>
                <p className={`medium_text ${styles.medium_text} medium_text__light`}>Prices are always changing, find out the value of your property today</p>
                <Link href="/contact-us"><Button text="Contact us" onClick={onClick} /></Link>
            </Container>
        </section>
    )
}
