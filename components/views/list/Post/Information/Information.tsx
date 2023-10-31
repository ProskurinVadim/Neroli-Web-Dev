import { Bed, Bath, Size} from "../../../../icons";
import styles from "../Post.module.scss";
interface ICode {
    adress: string,
    beds: string,
    baths: number,
    size: number,
    header: string
}
const Information: React.FC<ICode> = ({ adress, baths, beds, header, size }) => {
    const bedroomsCount = beds.replace(/^\D+/g, '');
    return (
        <>
            <h2 className={`section_header ${styles.section_header}`}>{adress}</h2>
            <ul className={styles.post_information_list}>
                {Boolean(bedroomsCount) && <li className={styles.post_information_list_item}> <Bed /> {!Boolean(bedroomsCount) && "Studio"} {bedroomsCount}</li>}
                {Boolean(baths) && <li className={styles.post_information_list_item}> <Bath /> {baths}</li>}
                {Boolean(size) && <li className={styles.post_information_list_item}> <Size /> {size} sqft</li>}
            </ul>
            <p className="medium_text medium_text__aditional">{header}</p>
        </>
    )
}

export default Information