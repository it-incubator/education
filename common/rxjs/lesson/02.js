import { fromEvent, map, throttleTime, debounceTime, Observable } from 'https://cdn.jsdelivr.net/npm/rxjs@7.8.1/+esm';


const observable = new Observable((observer) => {
    console.log('Inside Observable')
    let counter = 1;
    setInterval(() => {
        observer.next('hello: ' + counter);
        counter++;
    }, 1000)
})

//setTimeout(() => {
    observable.subscribe( (value) => {
        console.log('1 subscriber: ' + value)
    })
//}, 3000)

setTimeout(() => {
    observable.subscribe( (value) => {
        console.log('2 subscriber: ' + value)
    })
}, 5000)

