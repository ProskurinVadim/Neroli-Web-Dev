"use client"
import React, { useRef, useState, useEffect, cache } from 'react';
import { Autocomplete, DrawingManager, GoogleMap, Marker, useJsApiLoader, Polygon } from '@react-google-maps/api';
import Button, { buttonStyles } from "../../../../common/Button/Button";
import MarkerIcon from "./Marker.svg";
import MarkerFillIcon from "./MarkerFill.svg";
import styles from "../Search.module.scss";

import { getData, defaultCenter, drawingManagerOptions, polygonOptions, containerStyle } from "./getData";

interface IMark {
    position: {
        lat: number,
        lng: number
    },
    label?: string,
    active?: boolean
}

interface IMap {
    visible: boolean
}
const Map: React.FC<IMap> = ({ visible = false }) => {

    const [marks, setMarks] = useState<IMark[]>([]);
    const [polygons, setPolygons] = useState<any[]>([]);

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyCnY6J1ah-UU2LvjM5g2RuGZkrbJ-blekU",
        libraries: ['drawing']
    });

    const onOverlayComplete = ($overlayEvent:any) => {
        if ($overlayEvent.type === window.google.maps.drawing.OverlayType.POLYGON) {
            const newPolygon:any[] = $overlayEvent.overlay.getPath()
                .getArray()
                .map((latLng:any) => ({ lat: latLng.lat(), lng: latLng.lng() }))
            const startPoint = newPolygon[0];
            newPolygon.push(startPoint);
            $overlayEvent.overlay?.setMap(null);
            setPolygons([...polygons, newPolygon]);
        }
    }

    const search = () => {
        setMarks([...getData()])
    }

    const deletePolygons = () => {
        setPolygons([]);
    }

    if (!isLoaded) return <div> loading </div>
    return (
        <GoogleMap
            zoom={15}
            center={defaultCenter}
            options={{ disableDefaultUI: true }} 
            mapContainerStyle={{
                ...containerStyle,
                display: visible ? "block" : "none" }}
        >
            <DrawingManager
                onOverlayComplete={onOverlayComplete}
                options={drawingManagerOptions(window.google)}
            />
            {
                polygons.map((iterator, index) => (
                    <Polygon
                        key={index}
                        options={polygonOptions}
                        paths={iterator}
                        draggable
                        editable
                    />
                ))
            }
            {
                marks.map((elem, index) => (
                    <Marker
                        key={index}
                        icon={MarkerIcon.src}
                        position={{ ...elem.position }}
                        label={elem.label}
                    />
                ))
            }
            <div className={styles.map_buttons}>
                <Button
                    text="Delete Shapes"
                    onClick={deletePolygons}
                    className={`${styles.map_button} ${polygons.length ? buttonStyles.button_dangeres : buttonStyles.button_disabled}`}
                    disabled={!polygons.length}
                />
                <Button text="Search Appartments" onClick={search} className={`${styles.map_button} ${buttonStyles.button_submit}`} />
            </div>
        </GoogleMap>
    )
}

export default Map