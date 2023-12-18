import ListCard from "./ListCard/ListCard"
import { Star } from "../../icons";
import styles from "./ListCard/ListCard.module.scss";

interface IAppartmentCard {
    image: string,
    header: string,
    adress: string,
    description: string,
    price: number | null,
    square: number | null,
    bedrooms: number | string,
    link?: string,
    small?: boolean,
    className? : string,
}

const AppartmentListCard: React.FC<IAppartmentCard> = ({ small = true, className = "", ...props }) => {
    return (
        <ListCard {...props}
            small={small}
            className={`${className} ${!small ? styles.card_vertical : ""}`}
        />
    )   
}

export default AppartmentListCard