import {getCounterValue, setCounterValue} from "./low-level-bll.js";

export function render() {
    setCounterValue(100)

    console.log('after set: ', getCounterValue())

    setTimeout(() => {
        console.log('after 1 second after set: ', getCounterValue())
    }, 1000)

    setTimeout(() => {
        console.log('after 3 second after set: ', getCounterValue())
    }, 3000)
}

