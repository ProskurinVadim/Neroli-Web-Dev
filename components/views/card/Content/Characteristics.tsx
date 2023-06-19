import { Bed, Size, Bath } from "../../../icons";

interface ICharacteristics {
    beds: number,
    baths: number,
    size: number
}
const Characteristics: React.FC<ICharacteristics> = ({ beds, baths, size}) => {
    return (
        <ul>
            <li>
                <Bed />
                {beds}
            </li>
            <li>
                <Bath />
                {baths}
            </li>
            <li>
                <Size />
                {size}
            </li>
        </ul>
    )
}

export default Characteristics