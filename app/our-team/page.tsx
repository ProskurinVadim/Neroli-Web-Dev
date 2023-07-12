import { OurTeam } from "../../components/views/shared/";
import { getFullAggents } from "../../utils/fetch";

const OurTeamPage = async () => {
    const { data } = await getFullAggents();
    return (
        <>
            <OurTeam fullCard={true} team={data} />
        </>
    )
}

export default OurTeamPage