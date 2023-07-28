"use client";
import { useState, useContext } from "react";
import {useSearchParams} from "next/navigation";
import { AdaptiveContext } from "../../../../context/AdaptiveContext";
import Container from "../../../../hoc/Container";
import { getData } from "./getData";
import Card from "../../../shared/Card/AppartmentCard";
import Pagination from "../../../shared/Pagination";
import styles from "./List.module.scss";
import Link from 'next/link';
import ListToggler from "./ListToggler";
import useItems from "@/hooks/useItems";

const formatData = (data: any[]) => data.map(({ id, attributes }) => ({
    adress: attributes.Address.description, //code -> adress
    image: attributes.Photos.data[0].attributes.formats.large.url,
    header: attributes.Title,
    category: attributes.Category,
    id,
}))

const filterAll = (items, propertyType) => {
    if(propertyType === "residential" ) {
        return items.filter(({category}) => category === "Residental");
    }
    if(propertyType === "commercial" ) {
        return items.filter(({category}) => category === "Commercial");
    }
    if(propertyType === "off-plan" ) {
        return items.filter(({category}) => category === "Off-plan");
    }
}

const List = () => {
    const data = getData("adress");
    const items = formatData(useItems());

    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const propertyType = params.get("property_type");
    const filteredItems = filterAll(items, propertyType);

    const [page, setPage] = useState(1);
    const [view, setView] = useState<"list" | "table">("table")
    const adaptive = useContext(AdaptiveContext);

    return (
        <section className="section__padding">
            <Container className="t_l">
                <h2 className="section_header">Search Results</h2>
                <div className={styles.list_text_container}>
                    <p className="medium_text medium_text__aditional">
                        Properties For Sale In Dubai: {filteredItems.length}
                    </p>
                    {adaptive != "mobile" && <ListToggler active={view} setActive={setView} />}
                </div>
                <ul className={styles.list}>
                    {filteredItems.map((elem: any, i) =>
                        <li key={`card-item-key-${i}`} className={styles.list_item}>
                            <Link href="/list/1" className="link_unset">
                                <Card  {...elem} className={styles.card} small={view === "table"} />
                            </Link>
                        </li>
                    )}
                </ul>
                {filteredItems.length > 12 && <Pagination page={page} setPage={setPage} className={styles.pagination} />}
            </Container>
        </section>
    )
}

export default List