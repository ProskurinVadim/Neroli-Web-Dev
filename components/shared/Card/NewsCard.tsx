import Card from "./Card";
import styles from "./Card.module.scss";
import { INewsCard } from "../../../types";


const NewsCard: React.FC<INewsCard> = ({ horizontal = false, table = false, ...props }) => {
    return (
        <Card {...props} className={`${styles.news_card} ${horizontal ? styles.card__horizontal : ""} ${table ? styles.card__horizontal__table : ""}`} additional={<p className={styles.card_date}>{props.date.day}<span className={styles.card_date_mins}>{props.date.mins}</span></p>} />
    )
}

export default NewsCard