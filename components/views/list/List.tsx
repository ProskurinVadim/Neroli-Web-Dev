"use client";
import { useState } from "react";
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
interface IMark {
    position: {
        lat: number,
        lng: number
    },
}
const List = () => {
    
    const [data, setData] = useState<any[]>([])
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(0);
    const [marks, setMarks] = useState<IMark[]>([]);

    const search = async (value: IForm | {}) => {
        const newData = await getAppartments(value);
        setData([...formatListData(newData.data)]);
    }
    const draw = async (body: any, fields: any) => {
        const newData = await getMapAppartments(body, fields);
        const newMarks = newData.map((elem: any) => ({ position: { lat: elem.Address.lat, lng: elem.Address.lng}}))
        setMarks([...newMarks])
        setData([...formatListMapData(newData)]);

    }
    return (
        <>
            <Search onSubmit={search} onDraw={draw} marks={marks} />
            <ListContent page={page} setPage={setPage} data={data} limit={limit}/>
        </>
    )
}

export default List