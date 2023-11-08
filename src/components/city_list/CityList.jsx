import React from 'react';
import Spinner from './../spinner/Spinner.jsx';
import CityItem from "../city_item/CityItem.jsx";
import Message from "../message/Message.jsx";
import {useCities} from "../../contexts/CitiesContext.jsx";
import styles from './CityList.module.css';

export default function CityList() {
const {cities, isLoading} = useCities();

    if (isLoading) {
        return <Spinner />
    }
    if (!cities.length) {
        return (<Message message="Click on a city on the map to add your first city."/>);

    }

    return (
        <ul className={styles.cityList}>
            {cities.map((city) => (
                <CityItem city={city} key={city.id} />
            ))}
        </ul>
    );
};