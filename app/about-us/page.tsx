import { AboutUs } from "../../components/views/about-us/";
import { Comments, OurTeam } from "../../components/views/shared/";
import { getBestAggents, getAboutUs } from "../../utils/fetch";
import { formatAgentsData } from "../../utils/formater";

import styles from "./about-us.module.scss";

export const revalidate = 60;

const AboutUsPage = async () => {
    const contentData = getAboutUs();
    const agentsData =  getBestAggents();
    const [content, agents] = await Promise.all([contentData, agentsData])

    return (
        <>
            <AboutUs title={content.data.attributes.Title} subTitle={content.data.attributes.Subtitle} mainImage={content.data.attributes.MainImage.data.attributes.formats.large.url} content={content.data.attributes.Content} />
            <OurTeam fullCard={false} team={formatAgentsData(agents.data).slice(0, 3)} />
            <div className={styles.comments_wrapper}>
                <Comments />
            </div>
        </>
    )
}

export default AboutUsPage
