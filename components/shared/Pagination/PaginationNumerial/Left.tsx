import Item from "../Item";
import Condition, { If } from "../../../../hoc/Conditional/Condition";
import styles from "../Pagination.module.scss";

interface Left {
    page: number,
    setPage: (newPage: number) => void,
    pageScale: number,
}

const Pagination: React.FC<Left> = ({ page, setPage, pageScale }) => {
    return (
        <Condition condition={pageScale !== 1}>
            <If>
                <Item name="1"
                    onClick={() => setPage(1)}
                    className={`${styles.pagination_item} ${page - 1 === 1 ? styles.active : ""}`}
                />
                <Item name="..."
                    onClick={() => setPage(pageScale - 4)}
                    className={`${styles.pagination_item} `}
                />
                <Item name={String(pageScale - 1)}
                    onClick={() => setPage(pageScale - 1)}
                    className={`${styles.pagination_item} ${pageScale - 1 === page ? styles.active : ""}`}
                />
            </If>
        </Condition>
    )
}

export default Pagination