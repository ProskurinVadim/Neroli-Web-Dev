"use client";
import Link from 'next/link';
import { useState } from "react";
import Container from "../../../../hoc/Container";
import NewsCard from "../../../shared/Card/NewsCard";
import { Button } from "../../../common";
import { getData } from "./getData";
import styles from "./LatestNews.module.scss";

const LatestNews = () => {
    const [data, setData] = useState([...getData()]);
    console.log(data);
    const handelSeeMore = () => {
        setData((prev) => [...prev, ...prev])
    }
    return (
        <section>
            <Container>
                <h2 className="section_header">Latest News</h2>
                <ul className={styles.latest_news_list}>
                    {
                        data.map((elem: any, i) => <li className={styles.latest_news_list_item} key={`"news-item-${i}`} >
                            <NewsCard {...elem} small={false} />
                        </li>)
                    }
                </ul>
                <Button onClick={handelSeeMore} text={<Link href="/blog">View all news</Link>} />
            </Container>
        </section>
    )
};

export default LatestNews