"use client"

import styles from "@/app/page.module.css";
import {Counter} from "@/features/counter-with-render-props/counter";
import {Display} from "@/features/counter-with-render-props/display";
import {Display2} from "@/features/counter-with-render-props/display2";
import Image from "next/image";
import React from "react";

let renderDisplayAdapter = (value) => <Display value={value}/>;

let renderDisplayAdapter2 = (value) => {
    return <>
        <ul>
            <li>sdfd</li>
            <li>sdrfd</li>
            <li>r</li>
        </ul>
        <Display2 inputCount={value}/></>
}


export const CounterComposition: React.FC = () => {

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Counter
                    renderDisplay={ renderDisplayAdapter }
                    renderButton={ (handler) => {
                        console.log('render Button')
                        return  <button onClick={handler}>Increment</button>
                    }}
                />
                <Counter
                    renderDisplay={ renderDisplayAdapter2 }
                    renderButton={ (handler) => <Image width={100}  height={100} src={'https://www.bigscal.com/wp-content/uploads/2023/12/How-To-Integrate-Google-Maps-With-React-JS.png'} onClick={handler} /> }  // Example of changing the button text and behavior
                />
            </main>
        </div>
    );
}


