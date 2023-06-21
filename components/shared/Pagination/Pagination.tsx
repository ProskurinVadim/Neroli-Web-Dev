import Item from "./Item";
import Condition, { If } from "../../../hoc/Conditional/Condition";
import styles from "./Pagination.module.scss";
import { LeftArrow, RightArrow } from "../../icons";
interface IPagination {
    page: number,
    setPage: (newPage: number) => void
    config?: {
        withArrows?: boolean,
        maxPages?: number,
        numerical?: boolean,
    }
    className?: string
}


const Pagination: React.FC<IPagination> = ({ page, setPage, config = {}, className }) => {
    const { withArrows = false, maxPages = 4, numerical = true } = config;
    const paginationArr = (new Array(maxPages)).fill("");
    const nextPage = (newPage: number) => newPage < maxPages+1 && setPage(newPage);
    const prevPage = (newPage: number) => newPage > 0 && setPage(newPage);
    return (
        <ul className={`${styles.pagination} ${numerical ? styles.numerical : ""}`}>
            <Condition condition={withArrows}>
                <If>
                    <Item onClick={() => prevPage(page - 1)} name={<LeftArrow />} className={styles.arrow}/>
                </If>
            </Condition>
            {
                paginationArr.map((_, i) => <Item
                    name={numerical ? `${i}` : ""}
                    key={`paggination-item-${i}`}
                    className={`${styles.pagination_item} ${page-1===i ? styles.active : ""}`}
                    onClick={() => setPage(i+1)}
                />)
            }
            <Condition condition={withArrows}>
                <If>
                    <Item onClick={() => nextPage(page + 1)} name={<RightArrow />} className={styles.arrow} />
                </If>
            </Condition>
        </ul>
    )
}

export default Pagination