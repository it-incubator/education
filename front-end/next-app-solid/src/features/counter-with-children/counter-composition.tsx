"use client"

import styles from "@/app/page.module.css";
import Image from "next/image";
import React from "react";
import {Counter} from "@/features/counter-with-children/counter";


export const CounterComposition: React.FC = () => {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Counter>
                    {  (value, handler) => (<>
                    <h2>{value}</h2>
                    <button onClick={handler}>click me</button>
                    </>)
                    }

                </Counter>
                {/*<Counter*/}
                {/*    renderDisplay={ (value) => <Display2 value={value}/> }*/}
                {/*    renderButton={ (handler) => <Image width={100}  height={100} src={'https://www.bigscal.com/wp-content/uploads/2023/12/How-To-Integrate-Google-Maps-With-React-JS.png'} onClick={handler} /> }  // Example of changing the button text and behavior*/}
                {/*/>*/}
            </main>
        </div>
    );
}


