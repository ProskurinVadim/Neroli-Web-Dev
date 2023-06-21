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
}

const AppartmentCard: React.FC<IAppartmentCard> = (props) => {
    return (
        <Card {...props}
            small={true}
        />
    )   
}

export default AppartmentCard