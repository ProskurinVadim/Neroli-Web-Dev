import Link from 'next/link';
import styles from "./ListCard.module.scss";
// import Image from "../../common/Image";
import Image from "next/image";
import {Bed, Size} from "../../../icons";

interface ICard {
    image: string,
    additional?: React.ReactNode | string | null,
    header: string
    adress?: string | null,
    description: string,
    link?: string,
    small?: boolean,
    className?: string,
    price: number | null,
    square: number | null,
    bedrooms: number | string,
}

const ListCard: React.FC<ICard> = ({ image, additional, adress, price, bedrooms, square, description, link = "", small = false, className = "", header }) => {
    // const bedroomsCount = bedrooms.replace(/^\D+/g, '');
    return (
        <div className={`${styles.card} ${className}`}>
            <div className={styles.card_image_wrapper}>
                <Image alt={header} fill={true} src={image} className={styles.card_image} />
            </div>

            <div className={styles.card_text}>
                {additional}
                <div className={styles.card_info}>
                    <p className={styles.card_adress}>AED {price || 0}</p>
                    <div className={styles.card_info_values}>
                        <p><Bed /> {bedrooms}</p>
                    </div>
                </div>

                <p className={styles.card_header}>{header}</p>
                {/*{adress && <p className={styles.card_adress}>{adress}</p>}*/}
                {
                    !small &&
                    <>
                        <div className={styles.card_description} dangerouslySetInnerHTML={{ __html: description }} />
                        <Link href={link} className={`${styles.card_link} text__underlining`}>Learn more</Link>
                    </>
                }
            </div>
        </div>
    )
}

export default ListCard
