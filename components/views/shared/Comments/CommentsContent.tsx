"use client";
import Carousel, { carouselStyles } from "../../../shared/Carousel/Carousel";
import Container, { containerStyles } from "../../../../hoc/Container/Container";
import Person, { personStyles } from "../../../shared/Person/Person";
import { getCarouselData } from "./getData";


interface ICommentsContent {
    comments: any[]
}

const CommentsContent: React.FC<ICommentsContent> = ({comments}) => {
    const data = getCarouselData(comments)
    const config = {
        time: 500000,
        itemsCount: 2,
        pagination: {
            maxPages: Math.ceil(data.length / 2),
            numerical: false,
        }
    };

    return (
        <section className="section__padding owerflow_hidden">
            <Container className={containerStyles.container__overflow_initial}>
                <h2 className="section_header"> Why people love Neroli Properties </h2>
                {<Carousel config={config} className={carouselStyles.carousel__center} Item={(props: any) => <Person {...props} className={personStyles.person_comments} />} data={data} />}
            </Container>
        </section>
    )
};

export default CommentsContent