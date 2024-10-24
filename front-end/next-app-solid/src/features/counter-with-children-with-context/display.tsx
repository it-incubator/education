"use client"

import {useContext} from "react";
import {CounterContext} from "@/features/counter-with-children-with-context/counter";

export const Display: React.FC = () => {
    const context = useContext(CounterContext)
    return <div style={{
        border: '1px solid red',
        padding: '5px'
    }}>
        {context.value}
    </div>
}

export const IncreaseButton: React.FC = () => {
    const context = useContext(CounterContext)
    return <button onClick={context.increase}>+</button>
}