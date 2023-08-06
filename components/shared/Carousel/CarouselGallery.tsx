"use client";
import { PaginationDot } from "../Pagination";
import { LeftArrow, RightArrow } from "../../icons";
import { useState, useEffect, useRef } from "react";
import styles from "./Carousel.module.scss";    

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
    const galleryRef = useRef<HTMLDivElement>(null);
    const [transition, setTransition] = useState<number>(400);
    const [anim,setAnim] = useState(false);
    const maxPage = Math.ceil(data.length / config.itemsCount);
    console.log(data.length)
    const configPagination = {
        withArrows: true,
        maxPages: Math.ceil(data.length / 4)
    };
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

    const slide = (index: number) => {
        setGallery((prevGallery: []) => {
            const copy = [...prevGallery];
            const prevElements = copy.splice(0, index + 1);
            copy.push(...prevElements);
            return copy;
        })
    }
    console.log(gallery)
    const handelCllick = (i: number) => {

        const galleryClass = galleryRef.current?.classList;
        galleryRef.current?.classList.remove(styles.anim_appear)
        if (!galleryClass?.contains(styles.anim_hide)) {
            galleryClass?.add(styles.anim_hide);
            setTimeout(() => {
                galleryRef.current?.classList.remove(styles.anim_hide)
                galleryClass?.add(styles.anim_appear);
                slide(i)
            }, 1500);
        }
    }
    const galleryOnClick = (i: number, elem?: any) => {
        const newPage = elem.index  
        setPage(Math.ceil(newPage / 4));
        handelCllick(i)
        
    }
    const handelSetPage = (page: number) => {
        console.log(page)
        handelCllick(page);
        setPage(page);
    }
    useEffect(() => {

        // const interval = setInterval(() => {
        //     update(page + 1);
        // }, time)
        // return () => interval && clearInterval(interval);
    }, [config, page, time, update])
    // console.log(data)
    return (
        <div className={`${styles.carousel} ${className}`}>
            <div className={styles.carousel_container} style={{ transform: `translateX(-${transition * (page - 1)}px` }}>
                <div key={`carousel-item-1`}><Item {...gallery[0]} /></div>
                <div className={`${galleryClassName}`} ref={galleryRef}>
                    {gallery.slice(1, 5).map((elem: any, i: number) => <GalleryItem {...elem} onClick={() => galleryOnClick(i, elem)} key={`gallery-item${i}`} />)}
                </div>
            </div>

            <PaginationDot page={page} setPage={handelSetPage} config={configPagination} />
        </div>
    )
};
export {
    styles as carouselStyles
}
export default Carousel