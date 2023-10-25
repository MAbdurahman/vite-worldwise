import React from 'react';
import Spinner from './../spinner/Spinner.jsx';
import styles from './CityList.module.css'

export default function CityList({cities, isLoading}) {

    if (isLoading) {
        return <Spinner />
    }

    return (
        <ul className={styles.cityList}>

        </ul>

    );
};