
import defaultNewsBGImage from "../public/news-test.jpg";
import testNewAdditionalImagez from "../public/news-content-test.jpg";
import defaultAgentImage from "../public/people-test.jpg";
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
        image: attributes.Photo.data ? attributes.Photo.data[0].attributes.formats.medium.url : defaultNewsBGImage.src,
        header: attributes.Title,
        date: {
            day: getDate(attributes.Date),
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
        date: getDate(elem.attributes.publishedAt),
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

