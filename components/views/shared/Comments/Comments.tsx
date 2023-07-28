"use sever";
import CommentsContent from "./CommentsContent";
import { getReviews } from "../../../../utils/fetch";

const Comments = async () => {
    const { data } = await getReviews()
    return <>
        <CommentsContent comments={data} />
    </>
    
}

export default Comments