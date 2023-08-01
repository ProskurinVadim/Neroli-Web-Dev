"use client";
import { PaginationDot } from "../Pagination";
import { LeftArrow, RightArrow } from "../../icons";
import { useState, useEffect, useRef } from "react";
import styles from "./Carousel.module.scss";
import Condition, { If } from "../../../hoc/Conditional/Condition";

interface ICarousel {
    data: any[],
    Item: any,
    GalleryItem: any;
    children?: React.ReactNode | string | null,
    className?: string,
    galleryClassName: string,
    config: {
        itemsCount: number;
        time: number,
        paginationClassName?: string,
        pagination?: {
            maxPages?: number,
        }
    }
}

const Carousel: React.FC<ICarousel> = ({ data, className, Item, GalleryItem, config = { itemsCount: 4, }, galleryClassName }) => {
    const [page, setPage] = useState<number>(1);
    const [gallery, setGallery] = useState<any>([...data]);
    const { time, pagination } = config;
    const ref = useRef<HTMLDivElement>(null);
    const [transition, setTransition] = useState<number>(400);
    const [anim,setAnim] = useState(false);
    const maxPage = Math.ceil(data.length / config.itemsCount);
    const update = (page: number) => {
        const newPage = page > maxPage ? 1 : page;
        page !== 0 && setPage(_ => newPage);
    }

    useEffect(() => {
        const width = ref.current ? ref.current.offsetWidth : 1;
        setTransition(width * config.itemsCount)
    }, [])

    const galleryUpdateLeft = () => {
        setAnim(() => true);
        setTimeout(() => {
            setAnim(() => false)
            const [g1, g2, g3, g4,g5,...gr] = gallery
            const newGallery = [g2, g4, g5, g3, ...gr, g1];
            setGallery([...newGallery])
        }, time);
    }
    const galleryUpdateRight = () => {

        setAnim(() => true);
        setTimeout(() => {
            setAnim(() => false)
            const [g1, g2, g3, g4, ...gr] = gallery;
            const [l, ...grr] =  gr.reverse()
            const newGallery = [l, g1, g4, g2, g3,...grr,];
            setGallery([...newGallery])
        }, time);
    }

    useEffect(() => {

        const interval = setInterval(() => {
            update(page + 1);
        }, time)
        return () => interval && clearInterval(interval);
    }, [config, page, time, update])

    return (
        <div className={`${styles.carousel} ${className}`}>
            <div className={styles.carousel_container} style={{ transform: `translateX(-${transition * (page - 1)}px` }}>
                {
                    data.map((elem, i) => <div key={`carousel-item-${i}`} ref={ref}><Item {...elem} /></div>)
                }
            </div>
            <div className={`${galleryClassName} ${anim ? styles.s : ""}`} >
                {gallery.map((elem: any) => <GalleryItem {...elem} onClick={()=>setPage(elem.index)}/>)}
            </div>
            <PaginationDot page={page} setPage={update} config={pagination} className={config.paginationClassName} />
        </div>
    )
};
export {
    styles as carouselStyles
}
export default Carousel