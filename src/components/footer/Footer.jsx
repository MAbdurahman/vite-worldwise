import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <p className={styles.copyright}>
                &copy;&nbsp; {new Date().getFullYear()} WorldWise Inc., All rights reserved
            </p>
        </footer>

    );
};