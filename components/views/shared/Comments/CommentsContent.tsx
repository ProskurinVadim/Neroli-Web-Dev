"use client";

import {useContext} from "react";
import CommentsCarousel, { carouselStyles } from "./CommentsCarousel/CommentsCarousel";
import SwiperCommentsCarousel from "./SwiperCommentsCarousel/SwiperCommentsCarousel";
import Container, { containerStyles } from "../../../../hoc/Container/Container";
import Person, { personStyles } from "../../../shared/Person/Person";
import {AdaptiveContext} from "@/context/AdaptiveContext";
import { getCarouselData } from "./getData";

import styles from "./comments-content.module.scss";

interface ICommentsContent {
    comments: any[]
}

const CommentsContent: React.FC<ICommentsContent> = ({ comments }) => {
    const data = getCarouselData(comments);
    const adaptive = useContext(AdaptiveContext);

    return (
        <section className={`section__padding owerflow_hidden ${styles.section}`}>
            <Container className={`${containerStyles.container__overflow_initial} ${styles.container}`}>
                <h2 className="section_header"> Why people love Neroli Properties </h2>
                {/*<div className={styles.carousel_wrapper}>*/}
                {/*    <SwiperCommentsCarousel data={data} />*/}
                {/*</div>*/}

                {/*{<CommentsCarousel config={config} className={carouselStyles.carousel__center} Item={(props: any) => <Person {...props} className={personStyles.person_comments} />} data={data} />}*/}

            </Container>
            <div className={styles.carousel_wrapper}>
                <SwiperCommentsCarousel data={data} />
            </div>
        </section>
    )
};

export default CommentsContent