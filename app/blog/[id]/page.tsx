import { ContactForm, } from "../../../components/views/shared";
import { Post } from "../../../components/views/blog";
import { getRecomendedNews, getBlog } from "../../../utils/fetch";
import { formatNewsData, formaBlogData } from "../../../utils/formater";
interface IArticle {
    params: {
        id: string
    }
}

export const revalidate = 60;

const Article: React.FC<IArticle> = async ({ params }) => {
    const recomendedNewsData = getRecomendedNews(params.id);
    const blogData = getBlog(params.id);
    const [news, blog] = await Promise.all([recomendedNewsData, blogData])
    
    return (
        <>
            <Post list={formatNewsData(news.data)} blog={formaBlogData(blog.data)}/>
            <ContactForm />
        </>
    )
}

export default Article