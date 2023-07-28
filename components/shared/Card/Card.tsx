import Link from 'next/link';
import styles from "./Card.module.scss";
import Image from "../../common/Image";


interface ICard {
    image: string,
    additional?: React.ReactNode | string | null,
    header: string
    adress?: string | null,
    description?: string | null,
    link?: string,
    small?: boolean,
    className?: string,
}


const Card: React.FC<ICard> = ({ image, additional, adress, description, link = "", small = false, className = "", header }) => {
    return (
        <div className={`${styles.card} ${className}`}>
            <Image src={image} alt="image" className={styles.card_image} />
            <div className={styles.card_text}>
                {additional}
                <p className={styles.card_header}>{header}</p>
                {adress && <p className={styles.card_adress}>{adress}</p>}
                {
                    !small &&
                    <>
                        <p className={styles.card_description}>{description}</p>
                        <Link href={link} className={`${styles.card_link} text__underlining`}>Learn more</Link>
                    </>
                }
            </div>
        </div>
    )
}

export default Card
