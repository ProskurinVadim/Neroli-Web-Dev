"use client";
import { useState } from "react";
import Container from "../../../../hoc/Container";
import { getData } from "./getData";
import Card from "../../../shared/Card/RaitingCard";
import Pagination from "../../../shared/Pagination";
import styles from "./List.module.scss";
import Link from 'next/link';

const List = () => {
    const data = getData("adress");
    const [page, setPage] = useState(1);
    return (
        <section>
            <Container className="t_l">
                <h2 className="section_header m_8_2">Search Results</h2>
                <p className="medium_text medium_text__aditional">Properties For Sale In Dubai: {data.length}</p>
                <ul className={styles.list}>
                    {data.map((elem: any, i) =>
                        <li key={`card-item-key-${i}`} className={styles.list_item}>
                            <Link href="/list/1" className="link_unset">
                                <Card  {...elem} className={styles.card}/>
                            </Link>
                        </li>
                    )}
                </ul>
                <Pagination page={page} setPage={setPage} />
            </Container>
        </section>
    )
}

export default List