"use client";
import { useState, useEffect, use } from "react";
import Container from "../../../../hoc/Container";
import { formatNewsData } from "../../../../utils/formater";
import NewsCard from "../../../shared/Card/NewsCard";
import Pagination from "../../../shared/Pagination";
import styles from "./List.module.scss";
import Link from 'next/link';
import { getBlogs } from "../../../../utils/fetch";
import { INewsCard } from "../../../../types";

const List: React.FC = () => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState<INewsCard[]>([]);
    const [limit, setLimit] = useState<number>(0);

    useEffect( () => {
        getBlogs(page)
            .then((res) => res.json())
            .then(({ data, meta }) => {
                setData(formatNewsData(data));
                const newLimit = Math.ceil(meta.pagination.total / 9);
                limit !== newLimit && setLimit(prev => newLimit);
            })
    }, [page])

    const config = {
        withArrows: false,
        maxPages: limit,
        numerical: true,
    }
    return (
        <section className="section__padding">
            <Container className="t_l">
                <h2 className={`section_header ${styles.section_header}`}>News & Blog</h2>
                <p className="medium_text medium_text__aditional">Last Update: March 16, 2023</p>
                <ul className={styles.list}>
                    {data.map((elem: any, i:any) =>
                        <li key={`card-item-key-${i}`} className={styles.list_item}>
                            <Link href={elem.link} className="link_unset">
                                <NewsCard  {...elem} horizontal={true} table={true} />
                            </Link>
                        </li>
                    )}
                </ul>
                {limit ? <Pagination page={page} setPage={setPage} config={config} /> : <></>}
            </Container>
        </section>
    )
}

export default List