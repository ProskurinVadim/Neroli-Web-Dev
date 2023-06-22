"use client"
import { useState } from "react";
import Container from "../../../../hoc/Container";
import Carousel from "../../../shared/Carousel";
import { Toggler } from "../../../common";
import PersonCard from "./PersonCard";
import Map from "./Map";
import Information from "./Information";
import Text from "./Text";
import CarouselItem from "./CarouselItem";
import styles from "./Post.module.scss";
import { getCarouselItem, getPerson, getTextData, getInformation } from "./getData";
interface IApartment {
    params: {
        id: string
    }
}
const Post: React.FC<IApartment> = ({ params }) => {
    const [active, setActive] = useState<string>("Description");
    const text = getTextData;
    const person = getPerson;
    const data = getCarouselItem();
    const information = getInformation;
    const config = {
        time: 500000,
        itemsCount: 1,
        pagination: {
            maxPages: 3,
            numerical: false,
            withArrows: true,
        }
    };
    return (
        <section className={styles.post}>
            <Container className="t_l">
                <h2 className={`section_header ${styles}`}> One Bedroom, Quality Finish, Near Park ID- {params.id}</h2>
                <Carousel config={config} data={data} Item={(props: any) => <CarouselItem {...props} />} />
                <div className={styles.post_content}>
                    <div className={styles.text_block}>
                        <Information {...information} />
                        <Toggler active={active} setActive={setActive} array={["Description", "Virtual Tour", "Street View"]} className={styles.post_toggler} />
                        <Text {...text}/>
                    </div>
                    <div>
                        <PersonCard {...person}/>
                        <Map />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Post