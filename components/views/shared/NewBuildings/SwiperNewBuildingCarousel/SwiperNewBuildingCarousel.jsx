import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from "../../../../shared/Card/AppartmentCard";
import Link from 'next/link';
import {nanoid} from "nanoid";
import Person, { personStyles } from "../../../../shared/Person/Person";
import styles from "../NewBuildings.module.scss";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.scss';

// import required modules
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';


export default function SwiperNewBuildingCarousel({data}) {

    const elements = data.map(item => <SwiperSlide key={nanoid()}> <Link className="link_unset" href={`/list/${item.id}`}><Card {...item} className={styles.card} /></Link></SwiperSlide>)
    return (
        <>
            <Swiper
                // slidesPerView={2.5}
                // spaceBetween={40}
                // centeredSlides={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1500: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                modules={[Navigation, Pagination]}
                className="newBuildingSwiper"
            >
                {elements}
            </Swiper>
        </>
    );
}
