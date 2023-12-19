"use client";
import { useState, useMemo } from "react";
import Link from 'next/link';
import Container from "../../../../hoc/Container";
import Toggler from "../../../common/Toggler";  
import Carousel from "../../../shared/Carousel";
import Card from "../../../shared/Card/AppartmentCard";
import SwiperNewBuildingCarousel from "./SwiperNewBuildingCarousel/SwiperNewBuildingCarousel";
import { getCarouselData } from "./getData";
import useItems from "../../../../hooks/useItems";
import styles from "./NewBuildings.module.scss";

const formatData = (data: any[]) => data.map(({ id, attributes }) => ({
    adress: attributes.Address?.description, //code -> adress
    image: attributes.Photos.data?.length ? attributes.Photos.data[0].attributes.formats.medium.url : [],
    header: attributes.Title,
    category: attributes.Category,
    OnMainPage: attributes.OnMainPage,
    //beds.replace(/^\D+/g, '')
    bedrooms: attributes.Bedrooms === "Studio" ? 0 : Number(attributes.Bedrooms.replace(/^\D+/g, '')),
    price: attributes.Price,
    square: attributes.Square,
    id,
}))

const getToggleButtonsText = (items: Array<any>) => {
    const arr = [];
    if(items.find(({category}) => (category === "Residential" || category === "Commercial"))) {
        arr.push("For sale")
    }
    if(items.find(({category}) => category === "Off-plan")) {
        arr.push("Off-Plan")
    }
    return arr;
}

const NewBuildings = () => {
    const [active, setActive] = useState("For sale");
    const handelSetActive = (active: string) => setActive(_ => active);

    const items = formatData(useItems());

    const filteredItems = (active === "For sale") ? items.filter(({category}) => (category === "Residential" || category === "Commercial")).filter(({OnMainPage}) => OnMainPage).slice(0, 4) : items.filter(({category}) => category === "Off-plan").filter(({OnMainPage}) => OnMainPage).slice(0, 4)

    const toggleButtonsText = useMemo(()=> getToggleButtonsText(items), [items]);

    return (
        <section className={`${styles.new_buildings} section__padding`}>
            <Container>
                <h2 className="section_header">New this week</h2>
                <Toggler array={toggleButtonsText} active={active} setActive={handelSetActive} className={styles.toggler} />
                <div className={styles.sliderContainer}>
                    <SwiperNewBuildingCarousel data={filteredItems} />
                </div>

                {/*<Carousel config={config} data={filteredItems}*/}
                {/*    Item={(props: any) =>*/}
                {/*        <Link className="link_unset" href={`/list/${props.id}`}>*/}
                {/*            <ListCard {...props} className={styles.card} />*/}
                {/*        </Link>*/}
                {/*    }*/}
                {/*/>*/}
            </Container>
        </section>
    )
}

export default NewBuildings