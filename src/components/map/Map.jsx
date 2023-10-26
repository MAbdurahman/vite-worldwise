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

    const [searchParams, setSearchParams] = useSearchParams();
    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');

    const handleClick = e => {
        e.preventDefault();
        setSearchParams({lat: 23, lng: 50})
    }

    return (
        <div className={styles.mapContainer}>
            <h2>Map</h2>
            <h3>Position: {lat}, {lng}</h3>
            <button onClick={handleClick}>Change Position</button>
        </div>

    );
};