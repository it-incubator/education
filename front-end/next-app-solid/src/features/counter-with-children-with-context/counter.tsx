"use client"

import React, {ReactNode, useState} from "react";

type PropsType = {}

export const CounterContext = React.createContext({
    value: 0,
    increase: () => {

    },
});

export const Counter: React.FC<{ children: ReactNode }> = (props) => {
    const [value, setValue] = useState(0)
    const incrementClickHandler = () => {
        setValue(value + 1)
    }
    return <div>
        <h1>Counter</h1>

        <CounterContext.Provider value={{
            value,
            increase: incrementClickHandler,
        }}>
            {props.children}
        </CounterContext.Provider>

    </div>
}




