import { OurTeam } from "../../components/views/shared/";
import { getFullAggents } from "../../utils/fetch";
import { formatAgentsData } from "../../utils/formater";

const OurTeamPage = async () => {
    const { data } = await getFullAggents();
    return (
        <>
            <OurTeam fullCard={true} team={formatAgentsData(data)} />
        </>
    )
}

export default OurTeamPage