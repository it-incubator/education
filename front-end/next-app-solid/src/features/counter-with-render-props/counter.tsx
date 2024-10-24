"use client"

import {ReactNode, useMemo, useState} from "react";

export type PropsType = {
    renderDisplay: (value: number) => ReactNode
    renderButton: (onClick: () => void) => ReactNode
}

export const Counter: React.FC<PropsType> = (props) => {
    const [value, setValue] =  useState(0)

    const incrementClickHandler = () => {
        setValue((prevValue) => prevValue + 1)
    }

    const button = useMemo(() => props.renderButton(incrementClickHandler),
        [])
        
    return <div>
        <h1>Counter</h1>
        {props.renderDisplay(value)}
        {button}
    </div>
}




