import Item from "../Item";
import Condition, { If } from "../../../../hoc/Conditional/Condition";
import styles from "../Pagination.module.scss";
import { LeftArrow } from "../../../icons";
interface IPagination {
    page: number,
    setPage: (newPage: number) => void
    config?: {
        withArrows?: boolean,
        maxPages?: number,
    }
}


const Pagination: React.FC<IPagination> = ({ page, setPage, config = {}, }) => {
    const { withArrows = false} = config;
    const prevPage = (newPage: number) => newPage > 0 && setPage(newPage);
    return (

        <Condition condition={withArrows}>
            <If>
                <Item onClick={() => prevPage(page - 1)} name={<LeftArrow />} className={styles.arrow} />
            </If>
        </Condition>
    )
}

export default Pagination