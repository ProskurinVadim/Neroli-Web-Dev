import { useState } from "react";
import Toggler from "../../../common/Toggler";
import Characteristics from "./Characteristics";
import RealtorCard from "./RealtorCard";

interface IContent {
    code: string,
    adress: string,
    description: string,
    characteristics: {
        beds: number,
        baths: number,
        size: number
    }
    person: {
        image: string,
        name: string,
        job: string,
    }
}
const Content: React.FC<IContent> = ({ code, characteristics, adress, description, person }) => {
    const [active, setActive] = useState<string>("Description");
    return (
        <section>
            <h2>{code}</h2>
            <Characteristics {...characteristics} />
            <p>{adress}</p>
            <Toggler array={["Description", "Virtual Tour", "Street View"]} active={active} setActive={setActive} />
            <RealtorCard {...person} />
            {description}
        </section>
    )
}

export default Content