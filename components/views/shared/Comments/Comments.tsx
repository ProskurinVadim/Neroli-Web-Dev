"use client";
import { useState } from "react";
import Carousel from "../../../shared/Carousel";
import Container from "../../../../hoc/Container";
import Person, { personStyles } from "../../../shared/Person/Person";
import { getCarouselData } from "./getData";
import styles from "./Comments.module.scss";
interface IForm {
    email: string,
    name:string
}
const Comments = () => {
    const data = getCarouselData();
    const config = {
        time: 500000,
        itemsCount: 3,
        pagination: {
            maxPages: 3,
            numerical: false,
        }
    };
    return (
        <section className={styles.comments}>
            <Container>
                <h2 className={`section_header ${styles.section_header}`}>Why people love Neroli Properties </h2>
                {<Carousel config={config} Item={(props: any) => <Person {...props} className={personStyles.person_comments} />} data={data} />}
            </Container>
        </section>
    )
};

export default Comments