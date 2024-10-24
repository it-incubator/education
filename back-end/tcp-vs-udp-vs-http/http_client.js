// http_client.js
import http from 'http';

const startTime = Date.now();

let requestsSent = 0;
const totalRequests = 10000;

function sendRequest() {
    http.get('http://localhost:3000', (res) => {
        res.on('data', () => {}); // читаем ответ, но не используем его
        res.on('end', () => {
            requestsSent++;
            if (requestsSent < totalRequests) {
                sendRequest();
            } else {
                console.log(`HTTP: All requests sent in ${Date.now() - startTime} ms`);
            }
        });
    });
}

sendRequest();
