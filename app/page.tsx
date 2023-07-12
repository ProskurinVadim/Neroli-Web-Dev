"use server";
import { Main } from "../components/views/home";
import { NewBuildings, Enquire, Comments, ContactForm, LatestNews } from "../components/views/shared";
import { getLastNews } from "../utils/fetch";
import { formatNewsData } from "../utils/formater";
const Home = async () => {

    const { data } = await getLastNews()

    return (
        <>
            <Main />
            <NewBuildings />
            <Enquire />
            <Comments />
            <ContactForm />
            <LatestNews news={formatNewsData(data)}/>
        </>
    )
}

export default Home