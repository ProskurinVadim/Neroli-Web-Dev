import Image from "next/image";

import styles from "./image-slider-item.module.scss";

const ImageSliderItem = ({src}) => {
    return (
        <div className={styles.imgWrapper}>
            <Image width={700}
                   height={475} src={src} style={{
                width: '100%',
                height: 'auto',
            }} alt="appartment image" className={styles.img} />
        </div>
    )
}

export default ImageSliderItem;