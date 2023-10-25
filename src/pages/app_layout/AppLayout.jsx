import React from 'react';

import Map from "../../components/map/Map.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx"
import User from "../../components/user/User.jsx";
import styles from './AppLayout.module.css'

export default function AppLayout() {

    return (
        <div className={styles.app}>
            <Sidebar />
            <Map />
            <User />
        </div>

    );
};