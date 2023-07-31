
import defaultNewsBGImage from "../public/news-test.jpg";
import testNewAdditionalImagez from "../public/news-content-test.jpg";
import defaultAgentImage from "../public/people-test.png";
import { ITeamsData, INewsData } from "./fetchTypes";

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const getDate = (string: string) => {
    const date = new Date(string);
    return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

const getReadTime = (text: string | null) => {
    let time = 0;
    if (text) {
        const wpm = 225;
        const words = text.trim().split(/\s+/).length;
        time = Math.ceil(words / wpm)
    };
    return `${time} minutes`
}

    
export const formatNewsData = (data: INewsData[]) => data.map(({ id, attributes }) => (
    {
        image: attributes.Photo.data ? attributes.Photo.data[0].attributes.formats.small.url : defaultNewsBGImage.src,
        header: attributes.Title,
        date: {
            day: getDate(attributes.Date || attributes.publishedAt),
            mins: getReadTime(attributes.Content),
        },
        description: attributes.Content,
        link: `/blog/${id}`
    }
))

export const formaBlogData = (elem: INewsData) =>(
    {
        header: elem.attributes.Title,
        description: elem.attributes.Content || "",
        date: getDate(elem.attributes.Date || elem.attributes.publishedAt),
        views: elem.attributes.Views || "0",
        time: getReadTime(elem.attributes.Content),
        background_image: elem.attributes.Photo.data ? elem.attributes.Photo.data[0].attributes.formats.large.url : defaultNewsBGImage.src,
    }
)

export const formatAgentsData = (data: ITeamsData[]) => data.map(({ attributes }) => ({
    person: {
        image: attributes.Photo.data ? attributes.Photo.data.attributes.url : defaultAgentImage,
        name: attributes.FullName,
        job: attributes.Category || "",
    },
    description: attributes.Description,
    socialNetworks: {
        facebook: attributes.Facebook,
        instagram: attributes.Instagram,
        whatsapp: attributes.WhatsApp,
        viber: attributes.Viber,
        twitter: attributes.Twitter,
        threads: attributes.Threads,
    }
}))

export const formatListData = (data: any[]) => data.map(({ id, attributes }) => ({
    adress: attributes.Address.description, 
    image: attributes.Photos.data[0].attributes.formats.small.url,
    header: attributes.Title,
    category: attributes.Category,
    description: attributes.ShortDescription,
    id,
}))

export const formatListMapData = (data: any[]) => data.map((elem: any) => ({
    adress: elem.Address.description,
    image: elem.Address.details.photos ? elem.Address.details.photos[0].url : defaultNewsBGImage.src,
    header: elem.Title,
    category: elem.Category,
    description: elem.Description,
    id: elem.id,
}))

interface IApartment {
    information: {
        adress: string,
        header: string,
        beds: string,
        baths: number,
        size: number
    }
    person: {
        image: string,
        name: string,
        job: string
    }
    description: string,
    carousel: Array<{ images: string[] }>,
    street_view: string[]
}

const test = { images: [testNewAdditionalImagez.src, testNewAdditionalImagez.src, testNewAdditionalImagez.src, testNewAdditionalImagez.src, testNewAdditionalImagez.src] }

//    image: attributes.Agent.data.attributes.Photo.data ? attributes.Agent.data.attributes.Photo.data.attributes.url : defaultAgentImage,

export const formatPostData = (post: any, agent: any)  => ({
    information: {
        adress: post.attributes.Address.description,
        coords: {
            lat: post.attributes.Address.lat,
            lng: post.attributes.Address.lng,
        },
        header: post.attributes.Title,
        beds: post.attributes.Bedrooms,
        baths: 2,
        size: post.attributes.Square,
    },

    person: {
        image: agent.attributes.Photo.data ? agent.attributes.Photo.data.attributes.url :  defaultAgentImage.src,
        name: agent.attributes.FullName,
        job: agent.attributes.Category || "",
        whatsapp: agent.attributes.WhatsApp,
        phone: agent.attributes.Phone,
        id: post.id,
    },
    carousel: post.attributes.Photos.data.map((elem: any, i: any) => ({ src: elem.attributes.formats.medium.url, index: i +1 })),
    description: post.attributes.Description,
    street_view: post.attributes.Street_View.data.map((elem: any) => ({ src: elem.attributes.formats.medium.url }))
})