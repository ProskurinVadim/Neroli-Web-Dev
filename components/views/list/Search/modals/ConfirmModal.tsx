import { Button } from "../../../../common";
import styles from "./Search.module.scss";
interface IInfoModal {
    setOpen: (open: boolean) => void;
    length: number,
}
const ConfirmModal: React.FC<IInfoModal> = ({ setOpen }) => {
    const handelClose = () => setOpen(false)
    return (
        <div className={styles.modal_info}>
            <h2>Found ${length} results for your search</h2>
            <Button text="Confirm" onClick={handelClose} />
        </div>
    )
}

export default ConfirmModal