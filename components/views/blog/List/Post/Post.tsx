"use client"
import Container from "../../../../../hoc/Container";
import { Image } from "../../../../common";
import RecommendedList from "./RecommendedList";
import { CalendarColored, EyeColored, Time, Twitter, Whatsapp, Facebook, CopyLink, Linkedin } from "../../../../icons";
import styles from "./Post.module.scss";
import {
    TwitterShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
} from 'next-share'
import { usePathname } from 'next/navigation';



interface IPost {
    list: any[],
    blog: {
        header: string,
        date: string,
        views: string,
        background_image: string,
        time: string,
        text: string,
        image: string,
        sub_text: string
    }
}
const Post: React.FC<IPost> = ({ blog, list }) => {
    const path = usePathname();
    const url = `https://neroli-web-dev.vercel.app/${path}`;
    const copylink = (e: any) => {
        navigator.clipboard.writeText(url)
    }
    return (
        <section>
            <div style={{ backgroundImage: `url(${blog.background_image})` }} className={styles.post_information}>
                <Container>
                    <h2 className={`section_header ${styles.section_header}`}>{blog.header}</h2>
                    <ul className={`medium_text ${styles.post_information_list}`}>
                        <li className={`medium_text medium_text__light ${styles.post_information_list_item}`}><CalendarColored />{blog.date}</li>
                        <li className={`medium_text medium_text__light ${styles.post_information_list_item}`}><EyeColored />{blog.views}</li>
                        <li className={`medium_text medium_text__light ${styles.post_information_list_item}`}><Time />{blog.time}</li>
                    </ul>
                </Container>
            </div>
            <Container >
                <p className={`medium_text ${styles.post_text}`}>{blog.text}</p>
                <Image src={blog.image} alt="post-image" className={styles.post_image}/>
                <p className={`medium_text ${styles.post_text}`}>{blog.sub_text}</p>
                <ul className={styles.post_social_list}>
                    <li className={`medium_text ${styles.post_social_list_item}`}>
                        <TwitterShareButton url={url}>
                            <Twitter />Twitter
                        </TwitterShareButton>
                    </li>
                    <li className={`medium_text ${styles.post_social_list_item}`}>
                        <Facebook />Facebook
                    </li>
                    <li className={`medium_text ${styles.post_social_list_item}`}>
                        <LinkedinShareButton url={url}>
                            <Linkedin />LinkedIn
                        </LinkedinShareButton>
                    </li>
                    <li className={`medium_text ${styles.post_social_list_item}`}>
                        <WhatsappShareButton url={url}>
                            <Whatsapp />WhatsApp
                        </WhatsappShareButton>
                    </li>
                    <li className={`medium_text ${styles.post_social_list_item}`} onClick={copylink} ><CopyLink />Copy Link</li>
                </ul>
                <RecommendedList list={list}/>
            </Container>
        </section>
    )
}

export default Post