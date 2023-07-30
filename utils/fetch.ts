const token = "527f761c97d1abd6c5d6e4e6fa4ec50451560a44c95e44598df61bcb836802e288e666c1af2cf0f95cedf7d05e498b7cc7ac9741d484c0cb21a373f18cb399389f90578aa40a627945a94f0bbc5d08a5dbb6251f3c55dbf920dd9a0dc6258caa92fd0e211aafa9aee45e1b58ea528f22dd7d1ec44b0cf60d6221bf985b009859";
const baseURL = "https://neroli-admin.onrender.com/api";

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

export const getMapAppartments = async (body: any,{ type, price_min, price_max, property_type, building, beds }: IItemQuery) => {
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
