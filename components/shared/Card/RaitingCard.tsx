import Card from "./Card"
import { Star } from "../../icons";
import styles from "./Card.module.scss";

interface IRaitingCard {
    image: string,
    header: string,
    raiting: number,
    adress: string,
    description?: string,
    link?: string,
    small?: boolean,
}

interface IStars {
    raiting: number,
}

const stars = [0, 0, 0, 0, 0];

const Stars: React.FC<IStars> = ({ raiting }) => {
    return (
        <ul className={styles.stars_list}>
            {
                stars.map((elem, i) => <li key={`stars-list-item-${i}`} className={`${styles.stars_list_item} ${i <= raiting ? styles.active : ""}`}>
                    <Star />
                </li>)
            }
            <li className={styles.stars_list_item_raiting}>{raiting}</li>
        </ul>
    )
}

const RaitingCard: React.FC<IRaitingCard> = (props) => {
    return (
        <Card {...props}
            small={true}
            additional={<Stars raiting={props.raiting} />}
        />
    )   
}

export default RaitingCard