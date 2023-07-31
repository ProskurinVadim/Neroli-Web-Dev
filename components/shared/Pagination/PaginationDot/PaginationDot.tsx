import Item from "../Item";
import styles from "../Pagination.module.scss";
import Left from "./Left";
import Right from "./Right";
interface IPagination {
    page: number,
    setPage: (newPage: number) => void
    config?: {
        withArrows?: boolean,
        maxPages?: number,
    },
    children?: React.ReactNode | string | null,
    className?: string
}


const Pagination: React.FC<IPagination> = ({ page, setPage, config = {}, className = "", children }) => {
    const { maxPages = 4,} = config;
    const paginationArr = (new Array(maxPages)).fill("");
    return (
        <ul className={`${styles.pagination} ${className}`}>
            <Left page={page} setPage={setPage} config={config} />
            {
                children
            }
            {
                paginationArr.map((_, i) => <Item
                    name={""}
                    key={`paggination-item-${i}`}
                    className={`${styles.pagination_item} ${page - 1 === i ? styles.active : ""}`}
                    onClick={() => setPage(i + 1)}
                />)
            }

            <Right page={page} setPage={setPage}  config={config} />

        </ul>
    )
}

export default Pagination