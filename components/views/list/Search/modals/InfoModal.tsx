import { Button } from "../../../../common";
import styles from "../Search.module.scss";
interface IInfoModal {
    setOpen: (open: boolean) => void;
}
const InfoModal: React.FC<IInfoModal> = ({ setOpen }) => {
    const handelClose = () => setOpen(false)
    return (
        <div className={`${styles.modal_info} ${styles.modal}`}>
            <h2>Fill header</h2>
            <p>Fill text</p>
            <Button text="Confirm!" onClick={handelClose} />
        </div>
    )
}

export default InfoModal