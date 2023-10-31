'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import ImageSliderItem from "./ImageSliderItem";

import styles from "./image-slider.module.scss";

const ImageSlider = ({items}) => {

    const elements = items.map(({src, index}) => <SwiperSlide key={index}><ImageSliderItem src={src} /></SwiperSlide>);

    return (
        <Swiper
            pagination={{
                clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className="imagesSwiper">
                {elements}
        </Swiper>
    )
}

export default ImageSlider;