"use client";
import { useState, useContext } from "react";
import { AdaptiveContext } from "../../../../context/AdaptiveContext";
import Container from "../../../../hoc/Container";
import Card from "../../../shared/Card/AppartmentCard";
import { PaginationNumerial } from "../../../shared/Pagination";
import styles from "./List.module.scss";
import Link from 'next/link';
import ListToggler from "./ListToggler";

interface IList {
    data: any[],
    page: number,
    limit: number,
    setPage: (page: number) => void
}
const ListContent: React.FC<IList> = ({ data, page, setPage, limit }) => {
    const [view, setView] = useState<"list" | "table">("table")
    const adaptive = useContext(AdaptiveContext);
    const config = {
        withArrows: false,
        maxPages: 100,
        numerical: true,
    }
    return (
        <section className="section__padding">
            <Container className="t_l">
                <h2 className="section_header">Search Results</h2>
                <div className={styles.list_text_container}>
                    <p className="medium_text medium_text__aditional">
                        Properties For Sale In Dubai: {data.length}
                    </p>
                    {adaptive != "mobile" && <ListToggler active={view} setActive={setView} />}
                </div>
                <ul className={styles.list}>
                    {data.map((elem: any, i) =>
                        <li key={`card-item-key-${i}`} className={styles.list_item}>
                            <Link href={`/list/${elem.id}`} className="link_unset">
                                <Card {...elem} className={styles.card} small={view === "table"} />
                            </Link>
                        </li>
                    )}
                </ul>
                {/*{<PaginationNumerial page={page} setPage={setPage} className={styles.pagination} config={config} />}*/}
            </Container>
        </section>
    )
}

export default ListContent