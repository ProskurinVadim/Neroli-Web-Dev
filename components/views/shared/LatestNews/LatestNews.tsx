"use client";
import Link from 'next/link';
import { useState } from "react";
import Container from "../../../../hoc/Container";
import NewsCard from "../../../shared/Card/NewsCard";
import Button,{ buttonStyles } from "../../../common/Button/Button";
import { getData } from "./getData";
import styles from "./LatestNews.module.scss";

const LatestNews = () => {
    const data: any = getData()
    console.log(data);
    const handelSeeMore = () => {
    }
    return (
        <section>
            <Container>
                <h2 className="section_header">Latest News</h2>
                <ul className={styles.latest_news_list}>
                    <li className={styles.latest_news_list_item}>
                        <NewsCard {...data[0]} />
                    </li>
                    <li className={styles.latest_news_list_item}>
                        <NewsCard {...data[1]} horizontal={true} />
                    </li>
                    <li className={styles.latest_news_list_item}>
                        <NewsCard {...data[2]} />
                    </li>
                </ul>
                <Link href="/blog" className={`${styles.button} ${buttonStyles.button} ${buttonStyles.button__link}`}>View all news</Link>
            </Container>
        </section>
    )
};

export default LatestNews