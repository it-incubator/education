import { fromEvent, map, throttleTime, debounceTime, Observable } from 'https://cdn.jsdelivr.net/npm/rxjs@7.8.1/+esm';


const observable = new Observable(observer => {

    const intervalId = setInterval(() => {
        observer.next(new Date().toISOString()); // отправляем текущее время
    }, 1000);

    // очистка интервала при завершении observable
    return () => {
        clearInterval(intervalId);
    }
});

observable.subscribe(data => console.log(1))
const subscription = observable.subscribe(data => console.log(2))
subscription.unsubscribe()