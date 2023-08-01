"use client"
import { useEffect, useState, useContext } from "react";
import Container from "../../../../hoc/Container";
import CarouselGallery from "../../../shared/Carousel/CarouselGallery";
import Carousel from "../../../shared/Carousel";
import { Toggler } from "../../../common";
import PersonCard from "./PersonCard";
import ApartmentMap from "./ApartmentMap";
import Information from "./Information";
import SwiperMobilePostCarousel from "./SwiperMobilePostCarousel/SwiperMobilePostCarousel";
import {AdaptiveContext} from "@/context/AdaptiveContext";
import SwiperStreetViewCarousel from "./SwiperStreetViewCarousel/SwiperStreetViewCarousel";
import CarouselItem from "./CarouselItem";
import styles from "./Post.module.scss";
// import { Image } from "../../../common";
import Image from "next/image";
import Condition, { If, Else } from "../../../../hoc/Conditional/Condition";
import BookingModal from "./BookingModal";
import Portal from "../../../../hoc/Portal"

interface IApartment {
    information: {
        adress: string,
        header: string,
        beds: string,
        baths: number,
        size: number,
        coords: any,
    }
    person: {
        image: string,
        name: string,
        job: string
    }
    description: string,
    carousel: Array<{ images: string[] }>,
    street_view: string[]
}


const Post: React.FC<IApartment> = ({ information, person, carousel, street_view, description }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [active, setActive] = useState<string>("Description");
    const adaptive = useContext(AdaptiveContext);

    const config = {
        time: 1000,
        itemsCount: 1,
        pagination: {
            maxPages: 3,
            numerical: false,
            withArrows: true,
        }
    };
    const handelSubmit = (value: any) => {
        console.log(value);
    }

    return (
        <section className={`section__padding ${styles.post}`}>
            <Container className="t_l">
                <h2 className={`section_header`}> {information.header}</h2>
                {adaptive === "mobile" ? <SwiperMobilePostCarousel data={carousel} /> : <CarouselGallery
                    config={config}
                    data={carousel}
                    Item={(props: any) => <div className={styles.postImg}> <Image fill={true} src={props.src} alt="appartment image" className={styles.street_view_image} /></div>}
                    galleryClassName={styles.post_small_images}
                    GalleryItem={(props: any) => <Image src={props.src} onClick={props.onClick} alt="gallery image" height={100} width={100} />}
                />}

                <div className={styles.post_content}>
                    <div className={styles.text_block}>
                        <Information {...information} />
                        <Toggler active={active} setActive={setActive} array={["Description", "Street View"]} className={styles.post_toggler} />
                        <Condition condition={active === "Description"}>
                            <If>
                                <div className={`medium_text`} dangerouslySetInnerHTML={{ __html: description }}/>
                            </If>
                            <Else>
                                <div className={styles.streetViewSlider}><SwiperStreetViewCarousel data={street_view} /></div>
                                {/*<Carousel className={styles.street_view} config={config} data={street_view} Item={(props: any) => <Image src={props.src} alt="street view image" className={styles.street_view_image} />} />*/}
                            </Else>
                        </Condition>
                    </div>
                    <div className={styles.person_content}>
                        <PersonCard {...person} onClick={() => setOpen((_:boolean) => true)}/>
                        <ApartmentMap coords={information.coords} />
                    </div>
                </div>
                {open && <Portal>
                    <div className={styles.booking_modal_container}>
                        <BookingModal onSubmit={handelSubmit} onClose={() => setOpen(()=> false)} />
                    </div>
                </Portal>
                }
            </Container>
        </section>
    )
}

export default Post