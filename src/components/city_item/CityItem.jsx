import { Link } from "react-router-dom";
import styles from './CityItem.module.css';

export default function CityItem({city}) {
    const {cityName, emoji, date} = city;


    const formatDate = (date) =>
        new Intl.DateTimeFormat("en", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }).format(new Date(date));

    const handleClick =(e) => {
        e.preventDefault();
        console.log(`cityItem button`, e.target)
    }

    return (
        <li>
            <Link to="/" className={styles.cityItem} >
                <span className={styles.emoji}>{emoji}</span>
                <h3 className={styles.name}>{cityName}</h3>
                <time className={styles.date}>({formatDate(date)})</time>
                <button className={styles.deleteBtn} onClick={handleClick}>
                    &times;
                </button>
            </Link>
        </li>

    );
};