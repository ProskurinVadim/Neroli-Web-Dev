import Item from "../Item";
import Condition, { If } from "../../../../hoc/Conditional/Condition";
import styles from "../Pagination.module.scss";
import { RightArrow } from "../../../icons";
interface IPagination {
    page: number,
    setPage: (newPage: number) => void
    config?: {
        withArrows?: boolean,
        maxPages?: number,
    }
}


const Pagination: React.FC<IPagination> = ({ page, setPage, config = {},}) => {
    const { withArrows = false, maxPages = 4, } = config;
    const nextPage = (newPage: number) => newPage < maxPages + 1 && setPage(newPage);
    return (
        <Condition condition={withArrows}>
            <If>
                <Item onClick={() => nextPage(page + 1)} name={<RightArrow />} className={styles.arrow} />
            </If>
        </Condition>
    )
}

export default Pagination