"use client"

import React, { useContext } from "react";
import { AdaptiveContext } from "../../../../context/AdaptiveContext";
import { Image } from "../../../common";
import Container from "../../../../hoc/Container";
import IMG from "../../../../public/about-us.jpg";
import { LogoLarge, LogoLargeUnfill } from "../../../icons";
import styles from "./AboutUs.module.scss";

interface IAboutUs {
    title: string,
    content: string,
    subTitle: string,
    mainImage: string,
}
const AboutUs: React.FC<IAboutUs> = ({ title, subTitle, mainImage, content }) => {

    const adaptive = useContext(AdaptiveContext);
    return (
        <section className={`section__padding ${styles.section}`}>
            <div className={styles.bg_img} style={{backgroundImage: `url(${mainImage})`}}>
                <span className={styles.logo__colored}>
                    {
                        adaptive === "mobile" ? <LogoLarge width="70" height="70" viewBox="0 0 70 70" /> :
                            <LogoLargeUnfill width="70" height="70" viewBox="0 0 70 70" />
                    }
                </span>
                <h2 className={`section_header ${styles.section_header}`}>{title}</h2>
                <p className={styles.section_sub_header}>{subTitle}</p>
            </div>
            <Container>
                <div dangerouslySetInnerHTML={{ __html: content }} className={`${styles.about_us_content} medium_text`} />
            </ Container>
        </section>
    )
}

export default AboutUs
