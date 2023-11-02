import {ReactNode} from "react";
import { useState, useEffect, createContext } from 'react';

import {getItems} from "@/utils/fetch";

export const ItemsContext = createContext<any[]>([]);

interface IContainer {
    className?: string;
    children: React.ReactNode | string | null;
}

const ItemsProvider:React.FC<IContainer> = ({children}) => {
    const [items, setItems] = useState([]);

    useEffect(()=> {
        const fetchItems = async()=> {
                const {data} = await getItems();
            console.log(data);
                setItems(data);
        }

        fetchItems();
    }, []);

    return (<ItemsContext.Provider value={items}>
                {children}
             </ItemsContext.Provider>)
}

export default ItemsProvider;