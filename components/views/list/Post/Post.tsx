"use client"
import { useState } from "react";
import Container from "../../../../hoc/Container";
import Carousel from "../../../shared/Carousel";
import { Toggler } from "../../../common";
import PersonCard from "./PersonCard";
import ApartmentMap from "./ApartmentMap";
import Information from "./Information";
import Text from "./Text";
import CarouselItem from "./CarouselItem";
import styles from "./Post.module.scss";
import { Image } from "../../../common";

import Condition, { If, Else } from "../../../../hoc/Conditional/Condition";

import { getCarouselItem, getPerson, getTextData, getInformation } from "./getData";
interface IApartment {
    params: {
        id: string
    }
}

// const formatPostData = (data: any[]) => data.map(({ attributes }) => ({
//     code: attributes.Address.description, //code -> adress
//     description: attributes.Description,
//     beds: attributes.Bedrooms,
//     baths:  2,
//     size: attributes.Square,
//     name: attributes.Title,
//     person: {
//         image: attributes.Agent.attributes.Photo.data ? attributes.Agent.attributes.Photo.data.attributes.url : defaultAgentImage,
//         name: attributes.Agent.attributes.FullName,
//         job: attributes.Agent.attributes.Category || "",
//     },
//     carousel: {
//         img1: attributes.Photos.data[0].attributes.formats.large.url,
//         img2: attributes.Photos.data[1].attributes.formats.large.url,
//         img3: attributes.Photos.data[2].attributes.formats.large.url,
//         img4: attributes.Photos.data[3].attributes.formats.large.url,
//         img5: attributes.Photos.data[4].attributes.formats.large.url,
//     },
//     street_view: attributes.Street_View.data.map((elem: any) => elem.attributes.formats.large.url)
// }))

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
        <section className={`section__padding ${styles.post}`}>
            <Container className="t_l">
                <h2 className={`section_header`}> One Bedroom, Quality Finish, Near Park ID- {params.id}</h2>
                <Carousel config={config} data={data} Item={(props: any) => <CarouselItem {...props} />} />
                <div className={styles.post_content}>
                    <div className={styles.text_block}>
                        <Information {...information} />
                        <Toggler active={active} setActive={setActive} array={["Description", "Street View"]} className={styles.post_toggler} />
                        <Condition condition={active === "Description"}>
                            <If>
                                <Text {...text} />
                                </If>
                            <Else>
                                <Carousel className={styles.street_view} config={config} data={data} Item={(props: any) => <Image src={props.img1} alt="street view image" className={styles.street_view_image} />} />
                            </Else>
                        </Condition>
                    </div>
                    <div className={styles.person_content}>
                        <PersonCard {...person}/>
                        <ApartmentMap />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Post