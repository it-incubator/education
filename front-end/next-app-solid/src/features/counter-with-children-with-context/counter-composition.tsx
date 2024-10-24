"use client"

import styles from "@/app/page.module.css";
import React from "react";
import {Counter} from "@/features/counter-with-children-with-context/counter";
import {Display, IncreaseButton} from "@/features/counter-with-children-with-context/display";


export const CounterComposition: React.FC = () => {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Counter>
                    <Display />
                    <IncreaseButton />
                </Counter>

                <Counter>
                    <Display />
                    <IncreaseButton />
                </Counter>
            </main>
        </div>
    );
}


