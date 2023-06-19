import { Image } from "../../../../common";
import styles from "../Post.module.scss"
interface ICarouselItem {
    img1: string,
    img2: string,
    img3: string,
    img4: string,
    img5: string,
}
const CarouselItem: React.FC<ICarouselItem> = ({ img1, img2, img3, img4, img5}) => {
    return (
        <div className={styles.post_image_item}>
            <Image src={img1} alt="appartment image" className={styles.post_big_images} />
            <div className={styles.post_small_images}>
                <Image src={img2} alt="appartment image" />
                <Image src={img3} alt="appartment image" />
                <Image src={img4} alt="appartment image" />
                <Image src={img5} alt="appartment image" />
            </div>
        </div>
    )
}

export default CarouselItem;