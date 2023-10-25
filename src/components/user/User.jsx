import React from 'react';
import styles from './User.module.css';

export default function User() {

    return (
        <div className={styles.user}>
            <h2>Welcome, User</h2>
            <button>Logout</button>
        </div>

    );
};