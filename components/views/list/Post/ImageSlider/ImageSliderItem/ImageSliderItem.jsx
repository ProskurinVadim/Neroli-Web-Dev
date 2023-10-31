import Image from "next/image";

import styles from "./image-slider-item.module.scss";

const ImageSliderItem = ({src}) => {
    return (
        <div className={styles.imgWrapper}>
            <Image fill={true} src={src} alt="appartment image" className={styles.img} />
        </div>
    )
}

export default ImageSliderItem;