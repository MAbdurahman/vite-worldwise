import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
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

    return (
        <div className={styles.city}>
            <div className={styles.row}>
                <h6>City ID -> {id}</h6>
            </div>
        </div>

    );
};