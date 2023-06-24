"use client";
import { useState } from "react";
import Carousel, { carouselStyles } from "../../../shared/Carousel/Carousel";
import Container, { containerStyles } from "../../../../hoc/Container/Container";
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
        time: 5000,
        itemsCount: 2,
        pagination: {
            maxPages: Math.ceil(data.length / 2),
            numerical: false,
        }
    };
    return (
        <section className={styles.comments}>
            <Container className={containerStyles.container__overflow_initial}>
                <h2 className={`section_header ${styles.section_header}`}>Why people love Neroli Properties </h2>
                {<Carousel config={config} className={carouselStyles.carousel__center} Item={(props: any) => <Person {...props} className={personStyles.person_comments} />} data={data} />}
            </Container>
        </section>
    )
};

export default Comments