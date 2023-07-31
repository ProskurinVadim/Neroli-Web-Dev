'use client';
import { useContext } from "react";
import { AdaptiveContext } from "../../../../../context/AdaptiveContext";
import Map from "../../../../shared/Map";
import { defaultCenter, containerStyle, mobileContainerStyle } from "./getData";
import Marker from "./Marker.svg";

const ApartmentMap = ({coords = defaultCenter}) => {

    const adaptive = useContext(AdaptiveContext);

    return (
        <Map markerIcon={Marker} center={coords} marks={[{ position: coords }]} containerStyle={adaptive === "mobile" ? mobileContainerStyle : containerStyle} />
    )
};

export default ApartmentMap