import {useContext} from "react";

import {ItemsContext} from "../context/ItemsContext";

const useItems = ()=> {
    const items = useContext(ItemsContext);

    return items;
}

export default useItems;