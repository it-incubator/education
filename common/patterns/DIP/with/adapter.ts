import {CounterType} from "./hi-level-ui";
import {getCounterValue, setCounterValue} from "./low-level-bll.js";

export const adapter: CounterType = {
    get: async () => {
        return getCounterValue()
    },
    set: async (value: number) => {
        setCounterValue(value)
    }
}