import Image from "../../../../public/main.jpg"
import Person from "../../../../public/people-test.jpg"
export const getTextData = {
    name: "1 Bedroom Apartment in Park One, Jumeirah Village Triangle.",
    characteristics: ["1 Bedroom Apartment", "Spacious And Bright", "Open Kitchen - Balcony", "907 Sq.Ft.", "Quality Finish", "Close To Community Park", "Swimming Pool & Gym"],
    description: "Completed in 2018, this one - bedroom apartment has a large open plan living area, a modern kitchen and a separate powder room.The bedroom has fitted wardrobes, floor to ceiling windows and direct access to the terrace.The property also features an allocated an underground parking space, a roof top swimming pool and gym facilities.",
    description_additional: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim.sed do eiusmod tempor incididunt ut labore.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim.sed do eiusmod tempor incididunt ut labore."
}

const TestImage = Image.src;
const TestItem = {
    img1: TestImage,
    img2: TestImage,
    img3: TestImage,
    img4: TestImage,
    img5: TestImage,
}

export const getCarouselItem = () => {
    return [
            TestItem, TestItem, TestItem
        ]
}
export const getPerson = {
    image: Person.src,
    name: "Sean Farmer",
    job: "Job title"
}

export const getInformation = {
    code: "AED 895,000",
    beds: 1,
    baths: 2,
    size: 1189,
    name: "1 Bedroom Apartment for Sale in Park One, Jumeirah Village Triangle."
}