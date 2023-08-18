import Link from 'next/link';
import styles from "./ListCard.module.scss";
// import Image from "../../common/Image";
import Image from "next/image";

interface ICard {
    image: string,
    additional?: React.ReactNode | string | null,
    header: string
    adress?: string | null,
    description: string,
    link?: string,
    small?: boolean,
    className?: string,
}

const ListCard: React.FC<ICard> = ({ image, additional, adress, description, link = "", small = false, className = "", header }) => {

    return (
        <div className={`${styles.card} ${className}`}>
            <div className={styles.card_image_wrapper}>
                <Image alt={header} fill={true} src={image} className={styles.card_image} />
            </div>

            <div className={styles.card_text}>
                {additional}
                <p className={styles.card_header}>{header}</p>
                {adress && <p className={styles.card_adress}>{adress}</p>}
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
