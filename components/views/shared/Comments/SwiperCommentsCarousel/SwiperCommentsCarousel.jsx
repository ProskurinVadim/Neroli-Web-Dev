import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {nanoid} from "nanoid";
import Person, { personStyles } from "../../../../shared/Person/Person";
import styles from "../comments-content.module.scss";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

export default function SwiperCommentsCarousel({data}) {

    const elements = data.map(item => <SwiperSlide className={styles.swiper_slide} key={nanoid()}><Person className={personStyles.person_comments}  {...item} /></SwiperSlide>)
    return (
        <>
            <Swiper
                // slidesPerView={2.5}
                // spaceBetween={40}
                // centeredSlides={true}
                // navigation={true}
                _slideClass="sas"
                _slideClasses="sss"
           
                pagination={{
                    clickable: true,
                }}
                centeredSlides={true}
                breakpoints={{
                    440: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 'auto',
                        spaceBetween: 40,
                    },
                }}
                modules={[Navigation, Pagination]}
                className={`reviewsSwiper `}
            >
                {elements}
            </Swiper>
        </>
    );
}
