import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMap,
    useMapEvents,
} from "react-leaflet";
import Button from './../button/Button.jsx'
import styles from './Map.module.css';

export default function Map() {

    return (
        <div className={styles.mapContainer}>
            <h2>Map</h2>
        </div>

    );
};