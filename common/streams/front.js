import {data} from './data.js'

let listener = (endpoint) => () => {
    fetch('http://localhost:3000/' + endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};
document.getElementById('sendButton').addEventListener('click', listener('endpoint'));

document.getElementById('sendButton2').addEventListener('click', listener('endpoint2'));