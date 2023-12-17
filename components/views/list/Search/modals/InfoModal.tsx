import { Button } from "../../../../common";
import styles from "../Search.module.scss";
interface IInfoModal {
    setOpen: (open: boolean) => void;
}
const InfoModal: React.FC<IInfoModal> = ({ setOpen }) => {
    const handelClose = () => setOpen(false)
    return (
        <div className={`${styles.modal_info} ${styles.modal}`}>
            <h2 className={styles.modal_info_header}>Map search</h2>
            <p className={styles.modal_info_text}>
                Click <span className={styles.modal_info_text__bold}>Draw a frame</span> and by clicking on the map, circle the location where you are looking for a property.
            </p>
            <Button text="Draw!" onClick={handelClose} />
        </div>
    )
}

export default InfoModal