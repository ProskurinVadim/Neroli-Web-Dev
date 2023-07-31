import { NewBuildings, ContactForm } from "../../../components/views/shared/";
import { Post } from "../../../components/views/list";
import { formatPostData } from "@/utils/formater";
import { getAggent, getAppartment } from "@/utils/fetch";

interface IApartment {
    params: {
        id: string
    }
}

const Apartment: React.FC<IApartment> = async ({ params }) => {
    const post: any =  await getAppartment(params.id);
    const agent: any = await getAggent(post.data.attributes.Agent.data.id);

    return (
        <>
            <Post {...formatPostData(post.data,agent.data)} />
            <ContactForm />
            <NewBuildings />
        </>
    ) 
}

export default Apartment