import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from "../../../../shared/Card/AppartmentCard";
import Image from "next/image";
import {nanoid} from "nanoid";
import Person, { personStyles } from "../../../../shared/Person/Person";
import styles from "../Post.module.scss";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.scss';

// import required modules
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';


export default function SwiperMobilePostCarousel({data}) {

    const elements = data.map(item => <SwiperSlide key={nanoid()}><div className={styles.street_view_image_container}><Image fill={true} src={item.src} alt="street view image" className={styles.street_view_image} /></div></SwiperSlide>)
    return (
        <>
            <Swiper
                slidesPerView={1}
                // spaceBetween={40}
                // centeredSlides={true}
                // navigation={true}
                pagination={{
                    clickable: true,
                }}
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
                modules={[Navigation, Pagination]}
                className="streetViewSwiper"
            >
                {elements}
            </Swiper>
        </>
    );
}
