"use client";
import {useContext} from "react";
import CommentsCarousel, { carouselStyles } from "./CommentsCarousel/CommentsCarousel";
import SwiperCommentsCarousel from "./SwiperCommentsCarousel/SwiperCommentsCarousel";
import Container, { containerStyles } from "../../../../hoc/Container/Container";
import Person, { personStyles } from "../../../shared/Person/Person";
import {AdaptiveContext} from "@/context/AdaptiveContext";
import { getCarouselData } from "./getData";

interface ICommentsContent {
    comments: any[]
}

const CommentsContent: React.FC<ICommentsContent> = ({ comments }) => {
    const data = getCarouselData(comments);
    const adaptive = useContext(AdaptiveContext);

    const config = {
        time: 500000,
        itemsCount: (adaptive === "mobile") ? 1 : 2,
        pagination: {
            maxPages: (adaptive === "mobile") ? data.length : Math.ceil(data.length / 2),
            numerical: false,
        }
    };

    return (
        <section className="section__padding owerflow_hidden">
            <Container className={containerStyles.container__overflow_initial}>
                <h2 className="section_header"> Why people love Neroli Properties </h2>
                <div style={{height: "400px"}}>
                    <SwiperCommentsCarousel data={data} />
                </div>

                {/*{<CommentsCarousel config={config} className={carouselStyles.carousel__center} Item={(props: any) => <Person {...props} className={personStyles.person_comments} />} data={data} />}*/}
            </Container>
        </section>
    )
};

export default CommentsContent