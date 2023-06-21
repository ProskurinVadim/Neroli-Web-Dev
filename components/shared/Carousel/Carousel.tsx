"use client";
import Pagination from "../Pagination";
import { useState, useEffect, useRef } from "react";
import styles from "./Carousel.module.scss";
interface ICarousel {
    data: any[],
    Item: any,
    children?: React.ReactNode | string | null,
    config: {
        itemsCount: number;
        time: number
        pagination?: {
            withArrows?: boolean,
            maxPages?: number,
            numerical?: boolean,
        }
    }
}

const Carousel: React.FC<ICarousel> = ({ data, Item, config = { itemsCount: 4} }) => {
    const [page, setPage] = useState<number>(1);
    const { time, pagination } = config;
    const ref = useRef<HTMLDivElement>(null);
    const [transition, setTransition] = useState<number>(400);
    const update = (page: number) => {
        const newPage = page > Math.ceil(data.length / config.itemsCount) ? 1 : page;
        setPage(_ => newPage);
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
        <div className={styles.carousel}>
            <div className={styles.carousel_container} style={{ transform: `translateX(-${transition*(page-1)}px`}}>
                {
                    data.map((elem, i) => <div key={`carousel-item-${i}`} ref={ref}><Item {...elem}  /></div>)
                }
            </div>
            <Pagination page={page} setPage={update} config={pagination} />
        </div>
    )
};

export default Carousel