
import styles from "./long-news-card.module.scss";
import { INewsCard } from "../../../../types";
import Image from "next/image";
import Link from "next/link";

const LongNewsCard: React.FC<INewsCard> = ({ horizontal = false, table = false, ...props }) => {

    return (
        <div className={`${styles.card} ${styles.news_card}  ${horizontal ? styles.card__horizontal : ""}`}>
            <div className={`${styles.card_image_wrapper} ${horizontal ? styles.card_image_wrapper_horizontal : ""}`}>
                <Image alt={props.header} fill={true} src={props.image} className={styles.card_image} />
            </div>

            <div className={styles.card_text}>
                <p className={styles.card_date}>{props.date.day}<span className={styles.card_date_mins}>{props.date.mins}</span></p>
                <p className={styles.card_header}>{props.header}</p>

                        <div className={styles.card_description} dangerouslySetInnerHTML={{ __html: props.description }} />
                        <Link href={props.link ? props.link : "#"} className={`${styles.card_link} text__underlining`}>Learn more</Link>

            </div>
        </div>
        // <Card {...props} className={`${styles.news_card} ${horizontal ? styles.card__horizontal : ""} ${table ? styles.card__horizontal__table : ""}`} additional={<p className={styles.card_date}>{props.date.day}<span className={styles.card_date_mins}>{props.date.mins}</span></p>} />
    )
}

export default LongNewsCard