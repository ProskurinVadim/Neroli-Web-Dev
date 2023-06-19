import Card from "./Card";
import styles from "./Card.module.scss";

interface INewsCard {
    image: string,
    header: string
    adress: string,
    description?: string,
    date: { day: string, hours: string }
    link?: string,
    horizontal?: boolean
}

const NewsCard: React.FC<INewsCard> = ({ horizontal = false, ...props }) => {
    return (
        <Card {...props} className={`${styles.news_card} ${horizontal ? styles.card__horizontal : ""}`} additional={<p className={styles.card_date}>{props.date.day} <span className={styles.card_date_hours}>{props.date.hours}</span></p>} />
    )
}

export default NewsCard