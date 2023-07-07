import { data } from "autoprefixer";
const token = "527f761c97d1abd6c5d6e4e6fa4ec50451560a44c95e44598df61bcb836802e288e666c1af2cf0f95cedf7d05e498b7cc7ac9741d484c0cb21a373f18cb399389f90578aa40a627945a94f0bbc5d08a5dbb6251f3c55dbf920dd9a0dc6258caa92fd0e211aafa9aee45e1b58ea528f22dd7d1ec44b0cf60d6221bf985b009859";
const baseURL = "https://neroli-admin.onrender.com/api";
const headers = {
    "Authorization": `Bearer ${token}`
}

const instance = async (url: string, method: "GET") => {
    const response = await fetch(`${baseURL}${url}`, {
        headers, method
    })
    const result = await response.json()
    console.log(result)
    return result
}



export const getFAQs = () => {
    return instance("/faqs","GET");
}

export const getReviews = () => {
    return instance("/reviews","GET");
}

export const getAggents = () => {
    return instance("/agents","GET");
}

export const getBlogs = () => {
    return instance("/blogs","GET");
}

export const getAppartments = () => {
    return instance("/items ","GET");
}