const token = process.env.NEXT_PUBLIC_TOKEN;
const baseURL = process.env.NEXT_PUBLIC_API_URL;

import { IItemQuery } from "./fetchTypes";

const headers = {
    "Authorization": `Bearer ${token}`
}

const instance = async (url: string) => {
    const response = await fetch(`${baseURL}${url}`, {
        headers,
        next: { revalidate: 60 }
    })
    return response.json();
}
//del
export const getItems = ()=> {
    return instance("/items?populate=*")
}

export const getFAQs = () => {
    return instance("/faqs");

}

export const getReviews = () => {
    return instance("/reviews?populate=*");
}

export const getBestAggents = () => {
    return instance("/agents?populate=*&filters[Best_agent][$eq]=true",);
}
export const getFullAggents = () => {
    return instance("/agents?populate=*",);
}
export const getAggent = (id:string) => {
    return instance(`/agents/${id}?populate=*`,);
}

export const getBlogs = (page: number, title?: string | null) => {
    let query = `&pagination[page]=${page}&pagination[pageSize]=9`;
    if (title) {
        query += `&filters[Title][$containsi]=${title}`;
    }
    return fetch(`${baseURL}/blogs?populate=*${query}`, {
        headers,
        next: { revalidate: 60 }
    });
}
export const getLastNews = () => {
    return instance(`/blogs?populate=*&sort[0]=Date:desc&pagination[pageSize]=3`,);
}
export const getRecomendedNews = (id: string) => {
    return instance(`/blogs?populate=*&filters[id][$ne]=${id}&sort[0]=Date:desc&pagination[pageSize]=3`,);
}
export const getBlog = (id: string) => {
    return instance(`/blogs/${id}?populate=*`,);
}

export const getAppartments = ({ type, price_min, price_max, property_type, building, beds }: IItemQuery) => {
    let query = ""
    if (type) {
        query += `&filters[Category][$eq]=${type}`;
    }
    if (price_min) {
        query += `&filters[Price][$gt]=${price_min}`;
    }
    if (price_max) {
        query += `&filters[Price][$lt]=${price_max}`;
    }
    if (property_type) {
        query += `&filters[PropertyTypeResidental][$eq]=${property_type}`;
    }
    if (building) {
        query += `&filters[Title][$containsi]=${building}`;
    }
    if (beds) {
        query += `&filters[Bedrooms][$eq]=${beds}`;
    }
    return instance(`/items?populate=*${query}`,);
}

export const getMapAppartments = async (body: any, { type, price_min, price_max, property_type, building, beds }: IItemQuery) => {

    let query = "";
    if (type) {
        query += `&filters[Category][$eq]=${type}`;
    }
    if (price_min) {
        query += `&filters[Price][$gt]=${price_min}`;
    }
    if (price_max) {
        query += `&filters[Price][$lt]=${price_max}`;
    }
    if (property_type) {
        query += `&filters[PropertyTypeResidental][$eq]=${property_type}`;
    }
    if (building) {
        query += `&filters[Title][$containsi]=${building}`;
    }
    if (beds) {
        query += `&filters[Bedrooms][$eq]=${beds}`;
    }
    const response = await fetch(`${baseURL}/items/containsLocation?populate=*${query}`, {
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        method: "POST", body: JSON.stringify(body)
    });
    return response.json()
}


export const getContactUs = () => {
    return instance("/contact-us")
}

export const getAboutUs = async () => {
    return instance("/about-us");
}

export const getAppartment = (id: string) => {
    return instance(`/items/${id}?populate=*`);
}
