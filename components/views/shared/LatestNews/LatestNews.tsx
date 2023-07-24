"use client";
import Link from 'next/link';
import { useContext } from "react";
import { AdaptiveContext } from "../../../../context/AdaptiveContext";
import Container from "../../../../hoc/Container";
import NewsCard from "../../../shared/Card/NewsCard";
import { buttonStyles } from "../../../common/Button/Button";
import { getData } from "./getData";
import styles from "./LatestNews.module.scss";

interface ILatestNews {
    news: any[]
}
const LatestNews: React.FC<ILatestNews> = ({ news }) => {
    const adaptive = useContext(AdaptiveContext);
    console.log(adaptive,"adaptive")
    return (
        <section className="section__padding">
            <Container>
                <h2 className="section_header">Latest News</h2>
                <ul className={styles.latest_news_list}>
                    <li className={styles.latest_news_list_item}>
                        <Link href={news[0].link} className="link_unset">
                            <NewsCard {...news[0]} table={true} />
                         </Link>
                    </li>
                        <li className={styles.latest_news_list_item}>
                        <Link href={news[1].link} className="link_unset">
                            <NewsCard {...news[1]} horizontal={adaptive === "xl"} table={true} />
                        </Link>
                    </li>
                    <li className={styles.latest_news_list_item}>
                        <Link href={news[2].link} className="link_unset">
                            <NewsCard {...news[2]} table={true} />
                        </Link>
                    </li>
                </ul>
                <Link href="/blog" className={`${buttonStyles.button} ${buttonStyles.button__link}`}>View all news</Link>
            </Container>
        </section>
    )
};

export default LatestNews