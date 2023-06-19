import { NewBuildings, ContactForm } from "../../../components/views/shared/";
import { Post } from "../../../components/views/list";
interface IApartment {
    params: {
        id: string
    }
}

const Apartment: React.FC<IApartment> = ({ params }) => {
    console.log(params)
    return (
        <>
            <Post params={params} />
            <ContactForm />
            <NewBuildings />
        </>
    ) 
}

export default Apartment