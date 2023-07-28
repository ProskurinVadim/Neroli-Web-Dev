"use client"
import { useState } from "react";
import Container from "../../../../hoc/Container";
import FAQItem from "./FAQItem";
import Link from 'next/link';
import { buttonStyles } from "../../../common/Button/Button";
import styles from "./FAQ.module.scss";

interface IFAQ {
    faq: any[]
}

const FAQ: React.FC<IFAQ> = ({ faq }) => {
    const [active, setActive] = useState<number[]>([])
    const handelSetActive = (index: number) => {
        const newArr = !active.includes(index) ? [...active, index] : active.filter(elem => elem !== index)
        setActive(() => [...newArr])
    }
    return (
        <section className="section__padding">
            <Container>
                <h2 className={`section_header ${styles.section_header}`}>FAQ</h2>
                <p className="medium_text medium_text__aditional">Frequently Asked Questions.</p>
                <ul className={styles.faq_list}>
                    {faq.map((elem, i) => <FAQItem {...elem.attributes} key={`faq-item-${i}`}active={active.includes(i)} setActive={()=>handelSetActive(i)} />)}
                </ul>
                <p className={styles.contact_us_text}>Any questions? Contact us and we&#39;ll help!</p>
                <Link href="/contact-us" className={`${buttonStyles.button} ${buttonStyles.button__link} ${styles.button}`}>Contact us</Link>
            </Container>
        </section>
    )
}

export default FAQ