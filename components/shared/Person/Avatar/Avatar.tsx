import { Image } from "../../../common";
import styles from "./Avatar.module.scss";
import { IAvatar } from "../../../../types";

const Avatar: React.FC<IAvatar> = ({ image,name,job}) => {
    return (
        <div className={styles.avatar}>
            <Image src={image} alt="avatar" className={styles.avatar_image} />
            <div>
                <h3 className={styles.avatar_name}>{name}</h3>
                <p className={styles.avatar_job}>{job}</p>
            </div>
        </div>
    )
}

export default Avatar