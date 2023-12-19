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

const sortDataByBedrooms = (data: any[]) => {
    const formatData = data.map(item => {
        const {attributes} = item;
        const {Bedrooms} = attributes;
        if(Bedrooms === "Studio") {
            attributes.Bedrooms = 0;
        } else {
            const [number] = Bedrooms.match(/(\d+)/);
            attributes.Bedrooms = Number(number);
        }
        return {...item, attributes};
    });
    formatData.sort((a, b) => a.attributes.Bedrooms - b.attributes.Bedrooms);
    return formatData;
}

const List = () => {
    
    const [data, setData] = useState<any[]>([])
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(0);
    const [marks, setMarks] = useState<IMark[]>([]);

    const search = async (value: IForm | {}) => {
        const newData = await getAppartments(value);
        const values = Object.values(value);

        if(!values.includes("Studio") || !values.includes("Bedrooms")) {
            const formatData = sortDataByBedrooms(newData.data);
            const result = formatListData(formatData);
            setData(result);
        } else {
            setData([...formatListData(newData.data)]);
        }
    }
    const draw = async (body: any,) => {
        const newData = await getMapAppartments(body, {});

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