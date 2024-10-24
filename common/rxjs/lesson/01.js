import { fromEvent, map, throttleTime, debounceTime, Observable } from 'https://cdn.jsdelivr.net/npm/rxjs@7.8.1/+esm';




const button = document.getElementById("x");

setTimeout(() => {
    const listener =  () => {}
    button.addEventListener("click", listener)
    button.removeEventListener("click", listener)
} ,5000)


// [f, f , f, f, f, f]

//const unsubscribe = store.subscribe(() => {})
//unsubscribe()

const promise = new Promise((res, rej) => {
    //res()
    rej()
})

promise.then(() => {console.log('res1')})


promise.then(() => {console.log('res2')})
promise.then(() => {console.log('res3')})

promise.catch(() => {console.log('rej1')})

promise.catch(() => {console.log('rej2')})