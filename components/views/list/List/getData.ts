import TestImage from "../../../../public/test-small.jpg";

const testData = {
    image: TestImage,
    header: "One Bedroom, Quality Finish, Near Park",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/list/1",
    adress: "AED 895,000",
}

export const getData = (key: string) => [
    testData, testData, testData, testData,
    testData, testData, testData, testData,
    testData, testData, testData, testData,
    testData, testData, testData, testData
]

