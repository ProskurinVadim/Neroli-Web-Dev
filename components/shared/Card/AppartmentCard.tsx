import Card from "./Card"
import { Star } from "../../icons";
import styles from "./Card.module.scss";

interface IAppartmentCard {
    image: string,
    header: string,
    adress: string,
    description?: string,
    link?: string,
    small?: boolean,
    className? : string,
}

const AppartmentCard: React.FC<IAppartmentCard> = ({ small = true, className = "", ...props }) => {
    return (
        <Card {...props}
            small={small}
            className={`${className} ${!small ? styles.card_vertical : ""}`}
        />
    )   
}

export default AppartmentCard