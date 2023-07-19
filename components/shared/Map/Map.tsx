import React from 'react';
import { GoogleMap, Marker, useJsApiLoader, Polygon } from '@react-google-maps/api';
import MarkerIcon from "./Marker.svg";
import { ICoords } from "../../../types";
import Condition, { If } from "../../../hoc/Conditional/Condition";
import { polygonOptions } from "./getData";

interface IMark {
    position: {
        lat: number,
        lng: number
    },
    label?: string,
    active?: boolean,
}

interface IMap {
    marks?: IMark[],
    polygons?: any[],
    center: ICoords,
    children?: React.ReactNode | string | null,
    markerIcon?: HTMLImageElement,
    containerStyle: any
}

const Map: React.FC<IMap> = ({ marks = [], polygons = [], children, center, containerStyle, markerIcon = MarkerIcon  }) => {

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyCnY6J1ah-UU2LvjM5g2RuGZkrbJ-blekU",
        libraries: ['drawing']
    });

    if (!isLoaded) return <div> loading </div>

    return (
        <GoogleMap
            zoom={15}
            center={center}
            options={{ disableDefaultUI: true }}
            mapContainerStyle={containerStyle}
        >
            {children}
            <Condition condition={!!polygons.length}>
                <If>
                    {
                        polygons.map((iterator, index) => 
                            <Polygon
                                key={index}
                                options={polygonOptions}
                                paths={iterator}
                            />
                        )
                    }
                </If>
            </Condition>
            <Condition condition={!!marks.length}>
                <If>
                    {
                        marks.map((elem, index) =>
                            <Marker
                                key={index}
                                icon={markerIcon.src}
                                position={{ ...elem.position }}
                                label={elem.label}
                            />
                        )
                    }
                </If>
            </Condition>
        </GoogleMap>
    )
}

export default Map