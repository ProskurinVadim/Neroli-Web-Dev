import { AboutUs } from "../../components/views/about-us/";
import { Comments, OurTeam } from "../../components/views/shared/";
import { getBestAggents } from "../../utils/fetch";
import { formatAgentsData } from "../../utils/formater";

const AboutUsPage = async () => {
    const { data } = await getBestAggents();
    return (
        <>
            <AboutUs />
            <OurTeam fullCard={false} team={formatAgentsData(data)} />
            <Comments />
        </>
    )
}

export default AboutUsPage