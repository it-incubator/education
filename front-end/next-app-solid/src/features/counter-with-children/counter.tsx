"use client"

import React, {ReactNode, useState} from "react";

type PropsType = {
}

export const Counter: React.FC<{ children: (value: any, handler: any) => ReactNode }> = (props) => {
    const [value, setValue] =  useState(0)
    const incrementClickHandler = () => {
        setValue(value + 1)
    }
    return <div>
        <h1>Counter</h1>
        {
            props.children(value, incrementClickHandler)
        }
    </div>
}




