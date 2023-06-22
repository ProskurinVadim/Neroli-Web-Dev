import { List, Table } from "../../../../icons";
import styles from "../List.module.scss";

interface IToggler {
    active: "list" | "table",
    setActive: (newActive: "list" | "table",) => void
}

const ListToggler: React.FC<IToggler> = ({ active, setActive }) => {
    const handelSetActive = (newActive: "list" | "table") => active !== newActive && setActive(newActive)
    console.log(active, active === "table" ? "#3B4248" : "")
    return (
        <div className={styles.list_toggler}>
            <span className={styles.list_toggler_item} onClick={() => handelSetActive("table")} >
                <Table fill={active === "table" ? "#3B4248" : "#E5E5E5"} />
            </span>
            <span className={styles.list_toggler_item} onClick={() => handelSetActive("list")}>
                <List fill={active === "list" ? "#3B4248" : "#E5E5E5"} />
            </span>
        </div>
    )
}

export default ListToggler