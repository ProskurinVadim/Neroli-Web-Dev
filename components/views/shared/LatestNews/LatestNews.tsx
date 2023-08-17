"use client";
import Link from 'next/link';
import { useContext } from "react";
import { AdaptiveContext } from "../../../../context/AdaptiveContext";
import Container from "../../../../hoc/Container";
import ShortNewsCard from "../../../shared/Card/ShortNewsCard/ShortNewsCard";
import LongNewsCard from "@/components/shared/Card/LongNewsCard/LongNewsCard";
import { buttonStyles } from "../../../common/Button/Button";
import { getData } from "./getData";
import styles from "./LatestNews.module.scss";

interface ILatestNews {
    news: any[]
}
const LatestNews: React.FC<ILatestNews> = ({ news }) => {
    const adaptive = useContext(AdaptiveContext);
    console.log(adaptive)
    return (
        <section className="section__padding">
            <Container>
                <h2 className="section_header">Latest News</h2>
                {(adaptive === "desktop-large" || adaptive === "desktop") && (
                    <ul className={styles.latest_news_list_large}>
                        <div>
                            <li className={styles.latest_news_list_item}>
                                <Link href={news[0].link} className="link_unset">
                                    <LongNewsCard {...news[0]} table={true} />
                                </Link>
                            </li>
                            <li className={styles.latest_news_list_item}>
                                <Link href={news[1].link} className="link_unset">
                                    <LongNewsCard {...news[1]} horizontal={adaptive === "desktop-large"} table={true} />
                                </Link>
                            </li>
                        </div>
                        <li className={styles.latest_news_list_item}>
                            <Link href={news[2].link} className="link_unset">
                                <ShortNewsCard {...news[2]} table={true} />
                            </Link>
                        </li>
                    </ul>
                )}
                {adaptive === "tablet" && (
                    <ul className={styles.latest_news_list}>
                        <li className={styles.latest_news_list_item}>
                            <Link href={news[0].link} className="link_unset">
                                <LongNewsCard {...news[0]} table={true} />
                            </Link>
                        </li>
                        <li className={styles.latest_news_list_item}>
                            <Link href={news[1].link} className="link_unset">
                                <LongNewsCard {...news[1]} table={true} />
                            </Link>
                        </li>
                        <li className={styles.latest_news_list_item}>
                            <Link href={news[2].link} className="link_unset">
                                <LongNewsCard {...news[2]} table={true} />
                            </Link>
                        </li>
                    </ul>
                )}

                {adaptive === "mobile" && (
                    <ul style={{marginTop: "40px"}}>
                        <li className={styles.latest_news_list_item}>
                            <Link href={news[0].link} className="link_unset">
                                <ShortNewsCard {...news[0]} table={true} />
                            </Link>
                        </li>
                        <li className={styles.latest_news_list_item}>
                            <Link href={news[1].link} className="link_unset">
                                <ShortNewsCard {...news[1]} table={true} />
                            </Link>
                        </li>
                        <li className={styles.latest_news_list_item}>
                            <Link href={news[2].link} className="link_unset">
                                <ShortNewsCard {...news[2]} table={true} />
                            </Link>
                        </li>
                    </ul>
                )}

                <div className={styles.button_wrapper}>
                    <Link href="/blog" className={`${buttonStyles.button} ${buttonStyles.button__link}`}>View all news</Link>
                </div>
            </Container>
        </section>
    )
};

export default LatestNews