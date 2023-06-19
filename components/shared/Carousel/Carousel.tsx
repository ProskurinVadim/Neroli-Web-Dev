"use client";
import Pagination from "../Pagination";
import { useState, useEffect } from "react";
import styles from "./Carousel.module.scss";
interface ICarousel {
    data: any[],
    Item: any,
    children?: React.ReactNode | string | null,
    config: {
        time: number
        pagination?: {
            withArrows?: boolean,
            maxPages?: number,
            numerical?: boolean,
        }
    }
}

const Carousel: React.FC<ICarousel> = ({ data, Item, config = {} }) => {
    const [page, setPage] = useState<number>(1);
    const { time, pagination } = config;
    const update = (page: number) => {
        const newPage = page === data.length ? 0 : page;
        setPage(_ => newPage);
    }

    useEffect(() => {
        const interval = setInterval(() => update(page + 1), time);
        return () => interval && clearInterval(interval);
    }, [config,page,time,update])

    return (
        <div className={styles.carousel}>
            <div className={styles.carousel_container} style={{transform: `translateX(${-100*(page-1)}%`}}>
                {
                    data.map((elem, i) => <Item {...elem} key={`carousel-item-${i}`}/>)
                }
            </div>
            <Pagination page={page} setPage={update} config={pagination} />
        </div>
    )
};

export default Carousel