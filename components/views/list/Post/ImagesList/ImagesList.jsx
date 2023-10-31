'use client';

import {useState} from "react";
import Image from "next/image";

import styles from "./images-list.module.scss";

const ImagesList = ({items}) => {
    const mainImage = items[0];

    const subImages = items.slice(1).map(({src, index}) => <div className={styles.subImageWrapper} key={index}><Image fill={true} src={src} alt="appartment image" className={styles.subImage} /></div>)

    return (
        <div className={styles.wrapper}>
            <div className={styles.mainImgWrapper}>
                <Image fill={true} src={mainImage.src} alt="appartment image" className={styles.mainImage} />
            </div>
            <div className={styles.subImages}>
                {subImages}
            </div>
        </div>
    )
}

export default ImagesList;