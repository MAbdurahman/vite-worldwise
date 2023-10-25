import React from 'react';
import {Outlet} from 'react-router-dom';
import Logo from './../logo/Logo.jsx';
import AppNav from "../app_nav/AppNav.jsx";
import styles from './Sidebar.module.css';

export default function Sidebar() {

    return (<div className={styles.sidebar}>
            <Logo/>
            <AppNav/>

            <Outlet/>

            <footer className={styles.footer}>
                <p className={styles.copyright}>
                    &copy;&nbsp; {new Date().getFullYear()} WorldWise Inc., All rights reserved
                </p>
            </footer>
        </div>);
};