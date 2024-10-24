"use client"

export const Display2: React.FC = (props: { inputCount: number }) => {
    return <div style={{
        border: '1px solid green',
        padding: '10px'
    }}>
        {props.inputCount}
    </div>
}