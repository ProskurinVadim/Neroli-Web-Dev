import { NewBuildings, ContactForm } from "../../../components/views/shared/";
import { Post } from "../../../components/views/list";
import { formatPostData } from "@/utils/formater";
import { getAppartment } from "@/utils/fetch";

interface IApartment {
    params: {
        id: string
    }
}

const Apartment: React.FC<IApartment> = async ({ params }) => {
    const data: any = await getAppartment(params.id);

    return (
        <>
            <Post {...formatPostData(data.data)} />
            <ContactForm />
            <NewBuildings />
        </>
    ) 
}

export default Apartment