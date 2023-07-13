"use client";
import { useState } from "react";
import Container from "../../../../hoc/Container";
import Toggler from "../../../common/Toggler";  
import Carousel from "../../../shared/Carousel";
import Card from "../../../shared/Card/AppartmentCard";
import { getCarouselData } from "./getData";
import styles from "./NewBuildings.module.scss"

const NewBuildings = () => {
    const [active, setActive] = useState("For sale");
    const handelSetActive = (active: string) => setActive(_ => active);
    const data = getCarouselData(active);
    const config = {
        time: 5000,
        itemsCount: 4,
        pagination: {
            withArrows: true,
            maxPages: Math.ceil(data.length / 4),
            numerical: false,
        }
    };
    return (
        <section className={`${styles.new_buildings} section__padding`}>
            <Container>
                <h2 className="section_header">New this week</h2>
                <Toggler array={["For sale", "Off-Plan"]} active={active} setActive={handelSetActive} className={styles.toggler} />
                <Carousel config={config} Item={(props: any) => <Card {...props} className={styles.card} />} data={data} />
            </Container>
        </section>
    )
}

export default NewBuildings