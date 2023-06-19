import Container from "../../../../../hoc/Container";
import { Image } from "../../../../common";
import RecommendedList from "./RecommendedList";
import { getData } from "./getData";
import { CalendarColored, EyeColored, Time, Twitter, Whatsapp, Facebook, CopyLink, Linkedin } from "../../../../icons";
import styles from "./Post.module.scss"

const Post = () => {
    const data = getData();
    return (
        <section>
            <Container >
                <div style={{ backgroundImage: `url(${data.background_image})` }} className={styles.post_information}>
                    <h2 className={`section_header ${styles.section_header}`}>{data.header}</h2>
                    <ul className={`medium_text ${styles.post_information_list}`}>
                        <li className={`medium_text medium_text__light ${styles.post_information_list_item}`}><CalendarColored />{data.date}</li>
                        <li className={`medium_text medium_text__light ${styles.post_information_list_item}`}><EyeColored />{data.views}</li>
                        <li className={`medium_text medium_text__light ${styles.post_information_list_item}`}><Time />{data.time}</li>
                    </ul>
                </div>
                <p className={`medium_text ${styles.post_text}`}>{data.text}</p>
                <Image src={data.image} alt="post-image" className={styles.post_image}/>
                <p className={`medium_text ${styles.post_text}`}>{data.sub_text}</p>
                <ul className={styles.post_social_list}>
                    <li className={`medium_text ${styles.post_social_list_item}`}><Twitter />Twitter</li>
                    <li className={`medium_text ${styles.post_social_list_item}`}><Facebook />Facebook</li>
                    <li className={`medium_text ${styles.post_social_list_item}`}><Linkedin />LinkedIn</li>
                    <li className={`medium_text ${styles.post_social_list_item}`}><Whatsapp />WhatsApp</li>
                    <li className={`medium_text ${styles.post_social_list_item}`}><CopyLink />Copy Link</li>
                </ul>
                <RecommendedList />
            </Container>
        </section>
    )
}

export default Post