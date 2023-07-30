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
    content: string
}
const AboutUs: React.FC<IAboutUs> = ({ title, content }) => {

    const adaptive = useContext(AdaptiveContext);
    return (
        <section className="section__padding">
            <Container >
                <span className={styles.logo__colored}>
                    {
                        adaptive === "mobile" ? <LogoLarge width="70" height="70" viewBox="0 0 70 70" /> :
                            <LogoLargeUnfill width="70" height="70" viewBox="0 0 70 70" />
                    }
                </span>
                <h2 className={`section_header ${styles.section_header}`}>{title}</h2>
                <div dangerouslySetInnerHTML={{ __html: content }} className={`${styles.about_us_content} medium_text`} />
            </ Container>
        </section>
    )
}

export default AboutUs