import { of } from 'rxjs';

export const observable = of(1, 2, 3)

observable.subscribe(x => console.log(x));