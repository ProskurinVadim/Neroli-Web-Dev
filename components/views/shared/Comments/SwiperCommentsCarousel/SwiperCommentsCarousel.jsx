import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {nanoid} from "nanoid";
import Person, { personStyles } from "../../../../shared/Person/Person";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

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
                modules={[Pagination]}
                className="mySwiper"
            >
                {elements}
                {/*<SwiperSlide>Slide 1</SwiperSlide>*/}
                {/*<SwiperSlide>Slide 2</SwiperSlide>*/}
                {/*<SwiperSlide>Slide 3</SwiperSlide>*/}
                {/*<SwiperSlide>Slide 4</SwiperSlide>*/}
                {/*<SwiperSlide>Slide 5</SwiperSlide>*/}
                {/*<SwiperSlide>Slide 6</SwiperSlide>*/}
                {/*<SwiperSlide>Slide 7</SwiperSlide>*/}
                {/*<SwiperSlide>Slide 8</SwiperSlide>*/}
                {/*<SwiperSlide>Slide 9</SwiperSlide>*/}
            </Swiper>
        </>
    );
}
