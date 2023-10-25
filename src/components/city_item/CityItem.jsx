import { Link } from "react-router-dom";
import styles from './CityItem.module.css';

export default function CityItem() {

    return (
        <li>
            <Link to="/" className={styles.CityItem} >
                <h3 className={styles.name}>city name</h3>
            </Link>
        </li>

    );
};