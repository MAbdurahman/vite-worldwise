import {useEffect, useState} from 'react';
import PageNav from "../../components/page_nav/PageNav.jsx";
import Button from "../../components/button/Button.jsx"
import styles from './Login.module.css';

export default function Login() {
    const [email, setEmail] = useState("jack@example.com");
    const [password, setPassword] = useState("qwerty");


    function handleSubmit(e) {
        e.preventDefault();
        console.log('handleSubmit', e.target);
    }

    return (
        <main className={styles.login}>
            <PageNav />
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className={styles.row}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>

                <div>
                    <Button type="primary">Login</Button>
                </div>
            </form>
        </main>

    );
};