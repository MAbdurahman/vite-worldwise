import React from 'react';
import AppNav from "../../components/app_nav/AppNav.jsx";
import styles from './AppLayout.module.css'

export default function AppLayout() {

    return (
        <div className={styles.app}>
            <AppNav />
            <h2>AppLayout</h2>
        </div>

    );
};