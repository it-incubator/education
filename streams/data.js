const array = [];

for (let i=0; i < 1000000; i++) {
    array.push({name: 'someName' + i, id: i})
}

export const data = array;