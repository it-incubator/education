import { fromEvent, map, throttleTime, debounceTime } from 'https://cdn.jsdelivr.net/npm/rxjs@7.8.1/+esm';

const clicks = fromEvent(document.getElementById('x'), 'click');
const positions = clicks.pipe(
    //throttleTime(1000), // троттлинг на 1 секунду
    debounceTime(1000), // троттлинг на 1 секунду
    map(ev => `(${ev.clientX}, ${ev.clientY})`)
);

positions.subscribe(data => console.log(data));