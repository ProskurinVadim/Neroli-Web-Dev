import { AboutUs } from "../../components/views/about-us/";
import { Comments, OurTeam } from "../../components/views/shared/";
import { getBestAggents, getAboutUs } from "../../utils/fetch";
import { formatAgentsData } from "../../utils/formater";

export const revalidate = 60;

const AboutUsPage = async () => {
    const contentData = getAboutUs();
    const agentsData =  getBestAggents();
    const [content, agents] = await Promise.all([contentData, agentsData])

    return (
        <>
            <AboutUs title={content.data.attributes.Title} content={content.data.attributes.Content} />
            <OurTeam fullCard={false} team={formatAgentsData(agents.data)} />
            <Comments />
        </>
    )
}

export default AboutUsPage