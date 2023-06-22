import { ContactForm, } from "../../../components/views/shared";
import { Post } from "../../../components/views/blog";
interface IArticle {
    params: {
        id: string
    }
}

const Article: React.FC<IArticle> = ({params}) => {

    return (
        <>
            <Post />
            <ContactForm isBottom={true} />
        </>
    )
}

export default Article