import Item from "../Item";
import Condition, { If } from "../../../../hoc/Conditional/Condition";
import styles from "../Pagination.module.scss";
interface Left {
    page: number,
    setPage: (newPage: number) => void,
    pageScale: number,
    maxScale: number,
    maxPages: number,
}
const Pagination: React.FC<Left> = ({ page, setPage, pageScale, maxScale, maxPages }) => {
    return (
        <Condition condition={pageScale < maxScale}>
            <If>
                <Item name="..."
                    onClick={() => setPage(pageScale + 4)}
                    className={`${styles.pagination_item} `}
                />
                <Item
                    name={String(maxPages)}
                    onClick={() => setPage(maxPages)}
                    className={`${styles.pagination_item} ${page - 1 === maxPages ? styles.active : ""}`}
                />
            </If>
        </Condition>
    )
}

export default Pagination