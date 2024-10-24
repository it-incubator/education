import { fromEvent, map, throttleTime, debounceTime, Observable } from 'https://cdn.jsdelivr.net/npm/rxjs@7.8.1/+esm';






//
 const button = document.getElementById("x");
 const button2 = document.getElementById("y");
//
 const clicks = fromEvent(button, 'click')
 const clicks2 = fromEvent(button2, 'click')
//
 const coords = clicks.pipe(
//     debounceTime(1000),
     map(ev => `(${ev.clientX}, ${ev.clientY})`)
 )
//
 const subscription = coords.subscribe((data) => {
     console.log(data)
 })
//
// setTimeout(() => {
//     subscription.unsubscribe()
// }, 5000)
