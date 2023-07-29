"use client"
import React, { useState } from 'react';
import { DrawingManager, GoogleMap, Marker, useJsApiLoader, Polygon } from '@react-google-maps/api';
import Button, { buttonStyles } from "../../../../common/Button/Button";
import Map from "../../../../shared/Map";
import InfoModal from "../modals/InfoModal";
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
    visible: boolean,
    onDraw: (body: any) => void;
    children: React.ReactNode | string | null
}
const DrawingMap: React.FC<IMap> = ({ visible = false, onDraw, children }) => {

    const [marks, setMarks] = useState<IMark[]>([]);
    const [open, setOpen] = useState <boolean>(false)
    const [polygons, setPolygons] = useState<any[]>([]);
    const [drawing, setDrawing] = useState<boolean>(false);

    const onOverlayComplete = ($overlayEvent:any) => {
        if ($overlayEvent.type === window.google.maps.drawing.OverlayType.POLYGON) {
            const newPolygon:any[] = $overlayEvent.overlay.getPath()
                .getArray()
                .map((latLng:any) => ({ lat: latLng.lat(), lng: latLng.lng() }))
            const startPoint = newPolygon[0];
            newPolygon.push(startPoint);
            $overlayEvent.overlay?.setMap(null);
            setPolygons([...polygons, newPolygon]);
            setMarks([...getData()])
            setOpen(true);
            onDraw([...polygons, newPolygon])
        }
    }

    const draw = () => setDrawing(() => true);

    const deletePolygons = () => {
        setPolygons([]);
        setDrawing(()=> false)
    }

    return (
        <Map
            center={defaultCenter}
            marks={marks}
            polygons={polygons}
            containerStyle={{
                ...containerStyle,
                display: visible ? "block" : "none" }}
        >
            <DrawingManager
                onOverlayComplete={onOverlayComplete}
                options={{ ...drawingManagerOptions(window.google) }}
                drawingMode={drawing ? google?.maps?.drawing?.OverlayType?.POLYGON : null}
            />
            <div className={styles.map_buttons}>
                {
                    drawing ?
                        <Button text="Delete Shapee" onClick={deletePolygons} className={`${styles.map_button} ${buttonStyles.button_dangeres}`} />
                        : <Button text="Draw a frame" onClick={draw} className={`${styles.map_button} ${buttonStyles.button_submit}`} />
                }
            </div>
            {children}
        </Map>
    )
}
//{ open && <InfoModal setOpen={setOpen} /> }
export default DrawingMap