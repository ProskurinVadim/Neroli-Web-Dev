'use client';

import {useState, useCallback} from "react";
import Image from "next/image";

import Modal from "../../../../shared/Modal";

import ImageSlider from "../ImageSlider";

import styles from "./images-list.module.scss";

const ImagesList = ({items}) => {
    const mainImage = items[0];
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = useCallback(()=> setModalOpen(prevState => !prevState), [setModalOpen]);

    const subImages = items.slice(1, 5).map(({src, index}) => <div  onClick={toggleModal} className={styles.subImageWrapper} key={index}><Image fill={true} src={src} alt="appartment image" className={styles.subImage} /></div>)

    return (
        <div className={styles.wrapper}>
            {modalOpen && <Modal close={toggleModal}><ImageSlider items={items} /></Modal>}
            <div className={styles.mainImgWrapper} onClick={toggleModal}>
                <Image fill={true} src={mainImage.src} alt="appartment image" className={styles.mainImage} />
            </div>
            <div className={styles.subImages}>
                {subImages}
            </div>
        </div>
    )
}

export default ImagesList;