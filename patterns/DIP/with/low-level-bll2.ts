let value = 0;

export function getSuperCounter() {
    return new Promise<number>((res) => {
        setTimeout(() => {
            res(value)
        }, 1000)
    });
}


export function setSuperCounter(newValue: number) {
    value = newValue
}