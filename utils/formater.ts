import testNewsImage from "../public/main.jpg";
import testNewsBGImage from "../public/news-test.jpg"
import testNewAdditionalImagez from "../public/news-content-test.jpg"


const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const getDate = (string: string) => {
    const date = new Date(string);
    return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}
const getReadTime = (text: string) => {
    let time = 0;
    if (text) {
        const wpm = 225;
        const words = text.trim().split(/\s+/).length;
        time = Math.ceil(words / wpm)
    };
    return `${time} minutes`
}
export const formatNewsData = (data: any[]) => data.map(({ id, attributes }) => (
    {
        image: attributes.Photo.data ? attributes.Photo.data[0].attributes.formats.medium.url : testNewsImage,
        header: attributes.Title,
        date: {
            day: getDate(attributes.Date),
            mins: `${(new Date(attributes.publishedAt).getMinutes())} mins`,
        },
        description: attributes.Content,
        link: `/blog/${id}`
    }
))


export const formaBlogData = ({ attributes}: any) =>(
    {
        header: attributes.Title,
        description: attributes.Content,
        date: getDate(attributes.Date),
        views: attributes.Views,
        time: getReadTime(attributes.Content),
        background_image: attributes.Photo.data ? attributes.Photo.data[0].attributes.formats.large.url : testNewsImage.src,
    }
)


