"use client";
import { useState } from "react";
import Container from "../../../../hoc/Container";
import { getData } from "./getData";
import NewsCard from "../../../shared/Card/NewsCard";
import Pagination from "../../../shared/Pagination";
import styles from "./List.module.scss";
import Link from 'next/link';

const List = () => {
    const data = getData("adress");
    const [page, setPage] = useState(1);
    return (
        <section>
            <Container className="t_l">
                <h2 className="section_header m_8_2">News & Blog</h2>
                <p className="medium_text medium_text__aditional">Last Update: March 16, 2023</p>
                <ul className={styles.list}>
                    {data.map((elem: any, i) =>
                        <li key={`card-item-key-${i}`} className={styles.list_item}>
                            <NewsCard  {...elem} horizontal={true} />
                        </li>
                    )}
                </ul>
                <Pagination page={page} setPage={setPage} />
            </Container>
        </section>
    )
}

export default List