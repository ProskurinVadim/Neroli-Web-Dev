import {useContext} from "react";

import {ItemsContext} from "../context/ItemsContext";

const useItems = ()=> {
    const items: any[] = useContext(ItemsContext);

    return items;
}

export default useItems;