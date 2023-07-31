"use client";

import { useSwipeable } from 'react-swipeable';
import {PaginationDot} from "../../../../shared/Pagination";
import {LeftArrow, RightArrow} from "../../../../icons";
// import { PaginationDot } from "../Pagination";
// import { LeftArrow, RightArrow } from "../../icons";
import { useState, useEffect, useRef } from "react";
import styles from "./Carousel.module.scss";
import Condition, { If } from "../../../../../hoc/Conditional/Condition";

interface ICarousel {
    data: any[],
    Item: any,
    children?: React.ReactNode | string | null,
    className?: string,
    config: {
        itemsCount: number;
        time: number,
        paginationClassName?: string,
        children?: React.ReactNode | string | null,
        pagination?: {
            withArrows?: boolean,
            maxPages?: number,
            numerical?: boolean,
        }
    }
}

const CommentsCarousel: React.FC<ICarousel> = ({ data, className, Item, config = { itemsCount: 4, }, children }) => {
    const [page, setPage] = useState<number>(1);
    const { time, pagination } = config;
    const ref = useRef<HTMLDivElement>(null);
    const [transition, setTransition] = useState<number>(400);
    const withArrows = !config.pagination?.withArrows;
    const maxPage = Math.ceil(data.length / config.itemsCount);

    const update = (page: number) => {
        const newPage = page > maxPage ? 1 : page;
        page !== 0 && setPage(_ => newPage);
    }

    useEffect(() => {
        const width = ref.current ? ref.current.offsetWidth : 1;
        setTransition(width * config.itemsCount)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => update(page + 1), time);
        return () => interval && clearInterval(interval);
    }, [config, page, time, update])

    const handlers = useSwipeable({
        onSwipedLeft: () => () => console.log("Left"),
        onSwipedRight: () => () => {
            console.log("Right");
            update(page - 1);
        },
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: true
    });

    return (
        <div {...handlers} className={`${styles.carousel} ${className}`}>
            <div  className={styles.carousel_container} style={{ transform: `translateX(-${transition*(page-1)}px`}}>
                {
                    data.map((elem, i) => <div className={styles.item} key={`carousel-item-${i}`} ref={ref}><Item {...elem}  /></div>)
                }
            </div>
            <Condition condition={withArrows}>
                <If>
                    {
                        page === 1 &&
                        <span className={`${styles.carousel_arrow} ${styles.carousel_arrow__left}`} onClick={() => update(page + 1)}>
                            <LeftArrow width={"20"} height={"20"} viewBox={"0 0 20 20"} />
                        </span>
                    }
                    {
                        page === maxPage &&
                        <span className={`${styles.carousel_arrow} ${styles.carousel_arrow__right}`} onClick={() => update(page - 1)}>
                            <RightArrow width={"20"} height={"20"} viewBox={"0 0 20 20"} />
                        </span>
                    }
                </If>
            </Condition>
            <Condition condition={maxPage !== 1}>
                <If>
                    <PaginationDot page={page} setPage={update} config={pagination} className={config.paginationClassName}>
                        {children}
                    </PaginationDot>
                </If>
            </Condition>
        </div>
    )
};
export {
    styles as carouselStyles
}
export default CommentsCarousel