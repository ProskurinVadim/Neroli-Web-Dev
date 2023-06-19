"use client"
import { useState } from "react";
import Container from "../../../../hoc/Container";
import FAQItem from "./FAQItem";
import { getData } from "./getData";
const FAQ = () => {
    const [active, setActive] = useState<number[]>([])
    const data = getData()
    const handelSetActive = (index: number) => {
        const newArr = !active.includes(index) ? [...active, index] : active.filter(elem => elem !== index)
        setActive(() => [...newArr])
    }
    return (
        <section>
            <Container>
                <h2 className="section_header">FAQ</h2>
                <p className="medium_text medium_text__aditional">Frequently Asked Questions.</p>
                <ul>
                    {data.map((elem, i) => <FAQItem {...elem} key={`faq-item-${i}`}active={active.includes(i)} setActive={()=>handelSetActive(i)} />)}
                </ul>
            </Container>
        </section>
    )
}

export default FAQ