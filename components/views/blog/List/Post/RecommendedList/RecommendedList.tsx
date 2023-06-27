"use client";
import Container from "../../../../../../hoc/Container";
import { getData } from "./getData";
import NewsCard from "../../../../../shared/Card/NewsCard";
import styles from "../../List.module.scss";
const RecommendedList = () => {
    const data = getData();
    return (
        <ul className={styles.list}>
            {data.map((elem: any, i) =>
                <li key={`card-item-key-${i}`} className={styles.list_item}>
                    <NewsCard  {...elem} horizontal={true} />
                </li>
            )}
        </ul>                
    )
}
export default RecommendedList