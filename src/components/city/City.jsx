import {useEffect} from 'react';
import {useParams, useSearchParams} from 'react-router-dom';
import BackButton from "../back_button/BackButton.jsx";
import Spinner from "../spinner/Spinner.jsx";
import styles from './City.module.css';


const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
        weekday: "long",
    }).format(new Date(date));
export default function City() {
    const { id } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');



    return (
        <div className={styles.city}>
            <div className={styles.row}>
                <h5>City ID ⇒ {id}</h5>
                <h6>Position ⇒ lat: {lat}, lng: {lng}</h6>
            </div>
        </div>

    );
};