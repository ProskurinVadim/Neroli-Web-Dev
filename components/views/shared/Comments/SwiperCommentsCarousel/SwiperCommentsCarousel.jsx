import { useRef, useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {nanoid} from "nanoid";
import Person, { personStyles } from "../../../../shared/Person/Person";
import styles from "../comments-content.module.scss";

import containerStyles from "../../../../../hoc/Container/Container.module.scss";

import useWidth from "@/hooks/useWidth";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

export default function SwiperCommentsCarousel({data}) {

    const offsetValue = useRef(0);

    useEffect(()=> {
        // console.log(window.innerWidth)
        const containerWidth = document.querySelector(`div.${containerStyles.container}`).offsetWidth;
        const slideWidth = document.querySelector(`div.${personStyles.person_comments}`).offsetWidth;
        const offset = (window.innerWidth - containerWidth) / 2 + (containerWidth / 2 - slideWidth - 27);
        offsetValue.current = offset;
        console.log(offset)
    }, [])

    const width = useWidth();

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
                slidesOffsetBefore={offsetValue.current}
                slidesOffsetAfter={offsetValue.current}
                onSetTranslate={(swiper, translate) => {
                    // console.log("onSetTranslate", firstRender.current);
                    // const swiperWrapper = document.querySelector(".reviewsSwiper .swiper-wrapper");
                    // if(firstRender.current && translate === 0) {
                    //     swiperWrapper.style.transform = "translate3d(200px, 0px, 0px)";
                    // }
                    // if(firstRender.current && translate !== 0) {
                    //     firstRender.current = false;
                    // }

                    // console.log(swiperWrapper.style.transitionDuration);
                    // console.log(translate);
                }}
                pagination={{
                    clickable: true,
                }}
                // centeredSlides={true}
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
