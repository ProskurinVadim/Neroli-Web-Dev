"use server";
import { FAQ } from "../../components/views/faq";
import { getFAQs } from "../../utils/fetch";


const AboutUsPage = async () => {
    const { data } = await getFAQs()

    return <FAQ faq={data} />
}

export default AboutUsPage