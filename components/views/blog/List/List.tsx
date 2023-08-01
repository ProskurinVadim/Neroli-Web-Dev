"use client";
import { useState, useEffect, } from "react";
import Container from "../../../../hoc/Container";
import { formatNewsData } from "../../../../utils/formater";
import NewsCard from "../../../shared/Card/NewsCard";
import { PaginationNumerial } from "../../../shared/Pagination";
import styles from "./List.module.scss";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { getBlogs } from "../../../../utils/fetch";
import { INewsCard } from "../../../../types";
import {nanoid} from "nanoid";

// const calcLastUpdate = data => {
//     const lastElement = data[data.length - 1];
//     // const
// }

const List: React.FC = () => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState<INewsCard[]>([]);
    const [limit, setLimit] = useState<number>(0);  
    const searchParams = useSearchParams();
    const title = searchParams.get("title");

    useEffect( () => {
        getBlogs(page, title)
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
                            <Link key={i} href={elem.link} className="link_unset">
                                <NewsCard key={i}  {...elem} horizontal={true} table={true} />
                            </Link>
                        </li>
                    )}
                </ul>
                {limit ? <PaginationNumerial page={page} setPage={setPage} config={config} /> : <></>}
            </Container>
        </section>
    )
}

export default List