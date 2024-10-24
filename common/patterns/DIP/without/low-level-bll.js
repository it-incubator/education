let value = 0;

export function getCounterValue() {
    return value;
}


export function setCounterValue(newValue) {
    setTimeout(() => {
        value = newValue
    }, 3000)
}