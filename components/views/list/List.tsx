"use client";
import { useEffect, useState } from "react";
import ListContent from "./ListContent";
import Search from "./Search";
import { getAppartments, getMapAppartments } from "@/utils/fetch";
import { formatListData, formatListMapData } from "@/utils/formater";
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
        setData([...formatListData(newData.data)]);
    }
    const draw = async (body: any,) => {
        console.log(body)
        const newData = await getMapAppartments(body, {});
        console.log(newData)
        setData([...formatListMapData(newData)]);

    }
    useEffect(() => {
        search({})
    },[])
    return (
        <>
            <Search onSubmit={search} onDraw={draw} />
            <ListContent page={page} setPage={setPage} data={data} />
        </>
    )
}

export default List