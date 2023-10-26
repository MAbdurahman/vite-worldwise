import React from 'react';
import CountryItem from "../country_item/CountryItem.jsx";
import Message from "../message/Message.jsx";
import Spinner from "../spinner/Spinner.jsx";
import styles from './CountryList.module.css';

export default function CountryList({cities, isLoading}) {
    if (isLoading) {
        return <Spinner />
    }
    if (!cities.length) {
        return (<Message message="Click on a city on the map to add your first city."/>);

    }

    const countries = cities.reduce((arr, city) => {
        if (!arr.map((el) => el.country).includes(city.country))
            return [...arr, { country: city.country, emoji: city.emoji }];
        else return arr;
    }, []);


    return (
        <ul className={styles.countryList}>
            {countries.map((country) => (
                <CountryItem country={country} key={country.country} />
            ))}
        </ul>

    );
};