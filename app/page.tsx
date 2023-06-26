import { Main } from "../components/views/home";
import { NewBuildings, Enquire, Comments, ContactForm, LatestNews } from "../components/views/shared"
export default function Home() {

    return (
        <>
            <Main />
            <NewBuildings />
            <Enquire />
            <Comments />
            <ContactForm />
            <LatestNews />            
        </>
    )
}
