"use sever";
import CommentsContent from "./CommentsContent";
import { getReviews } from "../../../../utils/fetch";

export const revalidate = 60;

const Comments = async () => {
    const { data } = await getReviews()
    return <>
        <CommentsContent comments={data} />
    </>
    
}

export default Comments