import { Bed, Bath, Size} from "../../../../icons";
import styles from "../Post.module.scss";
interface ICode {
    code: string,
    beds: number,
    baths: number,
    size: number,
    name: string
}
const Information: React.FC<ICode> = ({ code, baths, beds, name, size }) => {
    return (
        <>
            <h2 className={`section_header ${styles.section_header}`}>{code}</h2>
            <ul className={styles.post_information_list}>
                <li className={styles.post_information_list_item}> <Bed /> {beds}</li>
                <li className={styles.post_information_list_item}> <Bath /> {baths}</li>
                <li className={styles.post_information_list_item}> <Size /> {size} sqft</li>
            </ul>
            <p className="medium_text medium_text__aditional">{name}</p>
        </>
    )
}

export default Information