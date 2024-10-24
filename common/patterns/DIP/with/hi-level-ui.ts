
export async function render(counter: CounterType) {
    counter.set(100)
    console.log('after set: ', await counter.get())
    setTimeout(async () => {
        console.log('after 1 second after set: ', await counter.get())
    }, 1000)
    setTimeout(async () => {
        console.log('after 3 second after set: ', await counter.get())
    }, 3000)
}


export type CounterType = {
    get: () => Promise<number>,
    set: (value: number) => Promise<void>
}

