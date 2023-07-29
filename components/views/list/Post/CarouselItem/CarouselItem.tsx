import { Image } from "../../../../common";
import styles from "../Post.module.scss"
interface ICarouselItem {
    images : string[]
}
const CarouselItem: React.FC<ICarouselItem> = ({ images }) => {
    return (
        <div className={styles.post_image_item}>
            <Image src={images[0]} alt="appartment image" className={styles.post_big_images} />
            <div className={styles.post_small_images}>
                <Image src={images[1]} alt="appartment image" />
                <Image src={images[2]} alt="appartment image" />
                <Image src={images[3]} alt="appartment image" />
                <Image src={images[4]} alt="appartment image" />
            </div>
        </div>
    )
}

export default CarouselItem;