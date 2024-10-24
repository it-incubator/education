"use client"

import {useState} from "react";
import {Display} from "@/features/counter/display";

export const Counter: React.FC = () => {

    const [value, setValue] =  useState(0)

    const incrementClickHandler = () => {
        setValue(value + 1)
    }

    return <div>
        <Display value={value} />
        <button onClick={incrementClickHandler}>increment</button>
    </div>
}


