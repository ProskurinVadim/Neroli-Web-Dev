import { Image } from "../../../../common";
import GoogleMapImage from "../../../../../public/map-test.jpg";
import styles from "../Post.module.scss";

const Map = () => {
    return (
        <div className={styles.map}>
            <Image alt="google-map" src={GoogleMapImage.src} />
        </div>
    )
};

export default Map