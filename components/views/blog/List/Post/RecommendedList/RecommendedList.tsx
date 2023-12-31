"use client";
import Container from "../../../../../../hoc/Container";
import NewsCard from "../../../../../shared/Card/NewsCard";
import styles from "../Post.module.scss";

interface IRecommendedList {
    list: any[],
}

const RecommendedList: React.FC<IRecommendedList> = ({ list }) => {
    return (
        <ul className={styles.recomendation_list}>
            {list.map((elem: any, i) =>
                <li key={`card-item-key-${i}`} className={styles.list_item}>
                    <NewsCard  {...elem} horizontal={true} />
                </li>
            )}
        </ul>                
    )
}
export default RecommendedList