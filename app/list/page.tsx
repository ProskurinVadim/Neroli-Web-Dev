import { Search, List, } from "../../components/views/list";
import { getAppartments } from "../../utils/fetch";

const ListPage = async () => {

    const { data } = await getAppartments();

    return (
        <div className="">
            <Search />
            <List />
        </div>
    )
}

export default ListPage
