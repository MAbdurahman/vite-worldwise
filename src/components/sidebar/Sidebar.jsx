import React from 'react';
import {Outlet} from 'react-router-dom';
import Logo from './../logo/Logo.jsx';
import AppNav from "../app_nav/AppNav.jsx";
import Footer from "../footer/Footer.jsx";
import styles from './Sidebar.module.css';

export default function Sidebar() {

    return (<div className={styles.sidebar}>
            <Logo/>
            <AppNav/>
            <Footer />
            <Outlet/>
        </div>);
};