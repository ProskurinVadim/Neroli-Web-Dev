"use set"
import Container from "../../../../../hoc/Container";
import { Image } from "../../../../common";
import RecommendedList from "./RecommendedList";
import { CalendarColored, EyeColored, Time, Twitter, Whatsapp, Facebook, CopyLink, Linkedin } from "../../../../icons";
import styles from "./Post.module.scss";

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
                    <li className={`medium_text ${styles.post_social_list_item}`}><Twitter />Twitter</li>
                    <li className={`medium_text ${styles.post_social_list_item}`}><Facebook />Facebook</li>
                    <li className={`medium_text ${styles.post_social_list_item}`}><Linkedin />LinkedIn</li>
                    <li className={`medium_text ${styles.post_social_list_item}`}><Whatsapp />WhatsApp</li>
                    <li className={`medium_text ${styles.post_social_list_item}`}><CopyLink />Copy Link</li>
                </ul>
                <RecommendedList list={list}/>
            </Container>
        </section>
    )
}

export default Post