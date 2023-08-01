import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from "../../../../shared/Card/AppartmentCard";
import Image from "next/image";
import {nanoid} from "nanoid";
import Person, { personStyles } from "../../../../shared/Person/Person";
import styles from "./styles.module.scss";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

import './styles.scss';

// import required modules
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { FreeMode } from 'swiper/modules';
import { Thumbs } from 'swiper/modules';

export default function SwiperMobilePostCarousel({data}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const mainElements = data.map(item => <SwiperSlide key={nanoid()}><div className={styles.main_image_container}><Image fill={true} src={item.src} alt="street view image" className={styles.main_image} /></div></SwiperSlide>);

    const subElements = data.map(item => <SwiperSlide key={nanoid()}><div className={styles.sub_image_container}><Image fill={true} src={item.src} alt="street view image" className={styles.sub_image} /></div></SwiperSlide>)
    return (
        <>
            <Swiper
                slidesPerView={1}
                // spaceBetween={40}
                // centeredSlides={true}
                // navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                // navigation={true}
                // pagination={{
                //     clickable: true,
                // }}
                // breakpoints={{
                //     320: {
                //         slidesPerView: 2,
                //         spaceBetween: 20,
                //     },
                //     1024: {
                //         slidesPerView: 3,
                //         spaceBetween: 40,
                //     },
                // }}
                modules={[Thumbs]}
                className="postMainSwiper"
            >
                {mainElements}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={15}
                // navigation={true}
                pagination={{
                    clickable: true,
                }}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="postMainThumbSwiper"
            >
                {subElements}
            </Swiper>
        </>
    );
}
