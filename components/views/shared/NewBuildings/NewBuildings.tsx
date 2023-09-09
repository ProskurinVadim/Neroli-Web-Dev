"use client";
import { useState } from "react";

import Container from "../../../../hoc/Container";
import Toggler from "../../../common/Toggler";
import SwiperNewBuildingCarousel from "./SwiperNewBuildingCarousel/SwiperNewBuildingCarousel";

import useItems from "../../../../hooks/useItems";

import styles from "./NewBuildings.module.scss";

const formatData = (data: any[]) => data.map(({ id, attributes }) => ({
    adress: attributes.Address.description, //code -> adress
    image: attributes.Photos.data[0].attributes.formats.medium.url,
    header: attributes.Title,
    category: attributes.Category,
    id,
}))

const NewBuildings = () => {
    const [active, setActive] = useState("For sale");
    const handelSetActive = (active: string) => setActive(_ => active);

    const items = formatData(useItems());
    const filteredItems = (active === "For sale") ? items.filter(({category}) => (category === "Residential" || category === "Commercial")) : items.filter(({category}) => category === "Off-plan")

    return (
        <section className={`${styles.new_buildings} section__padding`}>
            <Container>
                <h2 className="section_header">New this week</h2>
                <Toggler array={["For sale", "Off-Plan"]} active={active} setActive={handelSetActive} className={styles.toggler} />
                <div className={styles.sliderContainer}>
                    <SwiperNewBuildingCarousel data={filteredItems} />
                </div>
            </Container>
        </section>
    )
}

export default NewBuildings