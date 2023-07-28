import { useState, useEffect, createContext } from 'react';

import {getItems} from "@/utils/fetch";

export const ItemsContext = createContext<string>([]);

const ItemsProvider = ({children}) => {
    const [items, setItems] = useState([]);

    useEffect(()=> {
        const fetchItems = async()=> {
            try {
                const {data} = await getItems();
                console.log(data)
                setItems(data);
            }
            catch(error) {
                console.log(error.message);
            }
        }

        fetchItems();
    }, []);

    return (<ItemsContext.Provider value={items}>
                {children}
             </ItemsContext.Provider>)
}

export default ItemsProvider;