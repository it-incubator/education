"use client"

export const Display: React.FC = (props: { value: number }) => {
    return <div style={{
        border: '1px solid red',
        padding: '5px'
    }}>
        {props.value}
    </div>
}