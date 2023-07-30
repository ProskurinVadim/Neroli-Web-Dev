import Item from "../Item";
import styles from "../Pagination.module.scss";
import Left from "./Left";
import Right from "./Right";
interface IPagination {
    page: number,
    setPage: (newPage: number) => void
    config?: {
        maxPages?: number,
    }
    className?: string
}

const getArrLength = (pageLimit: number, pageScale: number) =>
    pageLimit >= 4 && pageScale <= pageLimit - 4 ? pageScale === 1 ? 5 : 4 : pageLimit - pageScale + 1;


const Pagination: React.FC<IPagination> = ({ page, setPage, config = {}, className = "" }) => {
    const {maxPages = 1} = config;
    const pageScale = page < 5 ? 1 : Math.floor(page / 3) * 3;
    const maxScale = maxPages - 3;
    const paginationArr = new Array(getArrLength(maxPages, pageScale)).fill(0);
    return (
        <ul className={`${styles.pagination} ${styles.numerical} ${className}`}>
            <Left page={page} pageScale={pageScale} setPage={setPage} />
            {
                paginationArr.map((_, i) =>
                    <Item
                    key={"pagination-item-" + i}
                    className={`${styles.pagination_item} ${page === i + pageScale ? styles.active : ""}`}
                    name={`${pageScale + i}`}
                    onClick={() => setPage(pageScale + i)}
                />
                )
            }
            <Right page={page} pageScale={pageScale} setPage={setPage} maxPages={maxPages} maxScale={maxScale} />
        </ul>
    )
}

export default Pagination