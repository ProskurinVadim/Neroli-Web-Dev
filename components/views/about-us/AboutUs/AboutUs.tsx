"use client"
import { useContext } from "react";
import { AdaptiveContext } from "../../../../context/AdaptiveContext";
import { Image } from "../../../common";
import Container from "../../../../hoc/Container";
import IMG from "../../../../public/about-us.jpg";
import { LogoShort, LogoShortUnfill } from "../../../icons";
import styles from "./AboutUs.module.scss";
const AboutUs = () => {

    const adaptive = useContext(AdaptiveContext);
    return (
        <section className="section__padding">
            <Container >
                <span className={styles.logo__colored}>
                    {
                        adaptive === "mobile" ? <LogoShort width="70" height="70" viewBox="0 0 70 70" fill="#DDDE70" /> :
                        <LogoShortUnfill width="70" height="70" viewBox="0 0 70 70" fill="#DDDE70" />
                    }
                </span>
                <h2 className={`section_header ${styles.section_header}`}>This is our business</h2>
                <p className={`medium_text medium_text__aditional ${styles.medium_text}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam consequat sed doeiusm.</p>
                <Image alt="" src={IMG.src} className={styles.about_us_image} />
                <p className={`medium_text ${styles.medium_text__description}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis magna tellus, convallis eu egestas vitae, consectetur a sem. Nam egestas sodales ligula. Duis elementum ipsum vel urna fermentum bibendum. Aenean ex lectus, scelerisque laoreet lorem sed, blandit maximus purus. Duis ut venenatis quam, non tincidunt neque. Nunc elit erat, egestas quis neque vel, placerat blandit dui. Nullam non bibendum magna, non varius quam. Curabitur a ultricies urna. Suspendisse potenti. Praesent et erat arcu. Donec varius enim mi, eget pellentesque augue congue eu. Mauris vehicula, quam vel vehicula tempor, massa libero imperdiet dolor, eget iaculis justo velit non risus. Aliquam aliquam leo eget nunc vulputate pulvinar.</p>
             </ Container>
        </section>
    )
}

export default AboutUs