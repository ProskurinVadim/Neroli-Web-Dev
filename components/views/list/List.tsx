"use client";
import { useEffect, useState } from "react";
import ListContent from "./ListContent";
import Search from "./Search";
import { getAppartments } from "@/utils/fetch";
import { formatListData } from "@/utils/formater";
//dublicat
interface IForm {
    building: string,
    type: string,
    property_type: string,
    price_min: string,
    price_max: string,
    beds: string,
}

const List = () => {
    
    const [data, setData] = useState<any[]>([])
    const [page, setPage] = useState(1);

    const search = async (value: IForm | {}) => {
        const newData = await getAppartments(value);
        setData(formatListData(newData.data));
        console.log(data)
    }
    useEffect(() => {
        search({})
    },[])
    return (
        <>
            <Search onSubmit={search} />
            <ListContent page={page} setPage={setPage} data={data} />
        </>
    )
}

export default List