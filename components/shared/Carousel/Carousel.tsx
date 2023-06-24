"use client";
import Pagination from "../Pagination";
import { LeftArrow, RightArrow } from "../../icons";
import { useState, useEffect, useRef } from "react";
import styles from "./Carousel.module.scss";
import Condition, { If } from "../../../hoc/Conditional/Condition";

interface ICarousel {
    data: any[],
    Item: any,
    children?: React.ReactNode | string | null,
    className?: string,
    config: {
        itemsCount: number;
        time: number,
        paginationClassName? : string,
        pagination?: {
            withArrows?: boolean,
            maxPages?: number,
            numerical?: boolean,
        }
    }
}

const Carousel: React.FC<ICarousel> = ({ data, className, Item, config = { itemsCount: 4,} }) => {
    const [page, setPage] = useState<number>(1);
    const { time, pagination } = config;
    const ref = useRef<HTMLDivElement>(null);
    const [transition, setTransition] = useState<number>(400);
    const withArrows = !config.pagination?.withArrows;
    const maxPage = Math.ceil(data.length / config.itemsCount)
    const update = (page: number) => {
        const newPage = page > maxPage ? 1 : page;
        page !== 0 && setPage(_ => newPage);
    }

    useEffect(() => {
        const width = ref.current ? ref.current.offsetWidth : 1
        console.log();
        setTransition(width * config.itemsCount)
    }, [])
    useEffect(() => {
        const interval = setInterval(() => update(page + 1), time);
        return () => interval && clearInterval(interval);
    }, [config,page,time,update])

    return (
        <div className={`${styles.carousel} ${className}`}>
            <div className={styles.carousel_container} style={{ transform: `translateX(-${transition*(page-1)}px`}}>
                {
                    data.map((elem, i) => <div key={`carousel-item-${i}`} ref={ref}><Item {...elem}  /></div>)
                }
            </div>
            <Condition condition={withArrows}>
                <If>
                    <span className={`${styles.carousel_arrow} ${styles.carousel_arrow__left}`} onClick={() => update(page - 1)}>
                        <LeftArrow width={"20"} height={"20"} viewBox={"0 0 20 20"} />
                    </span>
                    <span className={`${styles.carousel_arrow} ${styles.carousel_arrow__right}`} onClick={() => update(page + 1)}>
                        <RightArrow width={"20"} height={"20"} viewBox={"0 0 20 20"} />
                    </span>
                </If>
            </Condition>
            <Pagination page={page} setPage={update} config={pagination} className={config.paginationClassName} />
        </div>
    )
};
export {
    styles as carouselStyles
}
export default Carousel