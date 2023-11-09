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
import {useCities} from '../../contexts/CitiesContext.jsx'
import Button from './../button/Button.jsx'
import styles from './Map.module.css';

export default function Map() {
    const { cities } = useCities();
    const [searchParams, setSearchParams] = useSearchParams();
/*    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');*/
    const [mapPosition, setMapPosition] = useState([40, 0]);
    const navigate = useNavigate();

    const handleClick = e => {
        e.preventDefault();
        setSearchParams({lat: 23, lng: 50})
    }

    return (
        <div className={styles.mapContainer}>
{/*            {!geolocationPosition && (

            )}*/}
            <Button type="position">
                {/*{isLoadingPosition ? "Loading..." : "Use your position"}*/}
                Use your position
            </Button>

            <MapContainer
                center={mapPosition}
                zoom={6}
                scrollWheelZoom={true}
                className={styles.map}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                {cities.map((city) => (
                    <Marker
                        position={[city.position.lat, city.position.lng]}
                        key={city.id}
                    >
                        <Popup>
                            <span>{city.emoji}</span> <span>{city.cityName}</span>
                        </Popup>
                    </Marker>
                ))}

                <ChangeCenter position={mapPosition} />
                <DetectClick />
            </MapContainer>
        </div>

    );
};

function ChangeCenter({ position }) {
    const map = useMap();
    map.setView(position);
    return null;
}


function DetectClick() {
    const navigate = useNavigate();

    useMapEvents({
        click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
    });
}