import { FAQ } from "../../components/views/faq";
import { getFAQs } from "../../utils/fetch";

export const revalidate = 60;

const AboutUsPage = async () => {
    const { data } = await getFAQs()

    return <FAQ faq={data} />
}

export default AboutUsPage