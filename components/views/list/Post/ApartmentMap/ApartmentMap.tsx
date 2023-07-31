import { useContext } from "react";
import { AdaptiveContext } from "../../../../../context/AdaptiveContext";
import Map from "../../../../shared/Map";
import { defaultCenter, containerStyle, mobileContainerStyle } from "./getData";

const ApartmentMap = ({coords = defaultCenter}) => {

    const adaptive = useContext(AdaptiveContext);

    return (
        <Map center={coords} marks={[{ position: defaultCenter }]} containerStyle={adaptive === "mobile" ? mobileContainerStyle : containerStyle} />
    )
};

export default ApartmentMap