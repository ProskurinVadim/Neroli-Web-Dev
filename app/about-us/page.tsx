import { AboutUs } from "../../components/views/about-us/";
import { Comments, OurTeam } from "../../components/views/shared/";
import { getBestAggents } from "../../utils/fetch";

const AboutUsPage = async () => {
    const { data } = await getBestAggents();
    return (
        <>
            <AboutUs />
            <OurTeam fullCard={false} team={data}/>
            <Comments />
        </>
    )
}

export default AboutUsPage