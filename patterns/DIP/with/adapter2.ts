import {CounterType} from "./hi-level-ui";
import {getSuperCounter, setSuperCounter} from "./low-level-bll2.js";

export const adapter2: CounterType = {
    get: async () => {
        return getSuperCounter()
    },
    set: async (value: number) => {
        setSuperCounter(value)
    }
}