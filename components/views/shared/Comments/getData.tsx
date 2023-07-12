import TestImage from "../../../../public/people-test.jpg";

const test = {
    person: {
        image: TestImage,
        name: "Sean Farmer",
        job: "Job title",
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
}

export const getCarouselData = (data: any[]) => data.map(({ attributes }: any) => ({
    person: {
        image: TestImage,
        name: attributes.FullName,
        job: attributes.JobTitle,
    },
    description: attributes.Description
}))