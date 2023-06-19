import { AboutUs } from "../../components/views/about-us/";
import { Comments, OurTeam } from "../../components/views/shared/";

export default function AboutUsPage() {

    return (
        <>
            <AboutUs />
            <OurTeam fullCard={false} />
            <Comments />
        </>
    )
}
