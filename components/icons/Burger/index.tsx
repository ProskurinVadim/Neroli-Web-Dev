import { ISVG } from "../../../types";
import styles from "./Burger.module.scss";

interface IBurger {
    active: boolean,
}
const Burger: React.FC<IBurger> = ({ active }) => {
    return (
        <div className={`${active ? styles.active : ""} ${styles.burger}`}>
            <span className={styles.burger_line} />
            <span className={`${styles.burger_line} ${styles.burger_line__middle}} `}/>
            <span className={styles.burger_line} />
        </div>
    )
};

export default Burger