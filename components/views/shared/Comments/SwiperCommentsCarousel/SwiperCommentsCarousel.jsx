import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {nanoid} from "nanoid";
import Person, { personStyles } from "../../../../shared/Person/Person";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

export default function SwiperCommentsCarousel({data}) {

    const elements = data.map(item => <SwiperSlide key={nanoid()}><Person className={personStyles.person_comments}  {...item} /></SwiperSlide>)
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}

                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >
                {elements}
            </Swiper>
        </>
    );
}
