import TestImage from "../../../../public/people-test.png";



export const getCarouselData = (data: any[]) => data.map(({ attributes }: any) => ({
    person: {
        image: attributes.Photo.data ? attributes.Photo.data.attributes.url : TestImage,
        name: attributes.FullName,
        job: attributes?.JobTitle && "",
    },
    description: attributes.Description
}))