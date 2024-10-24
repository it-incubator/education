'use client'
import styles from "./page.module.css";
import {store} from "@/store/store";
import {Provider} from "react-redux";

export default function Home() {
    console.log('Home component rendering')


    return (
        <Provider store={store}>
            <div className={styles.page}>
              Home page
            </div>
        </Provider>)
}

// auth/signin
// auth/signup


