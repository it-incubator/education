// http_client.js
import http from 'http';

const startTime = Date.now();
let requestsSent = 0;
const totalRequests = 10000;

function sendRequest() {
    const options = {
        hostname: 'localhost',
        port: 3000,
        path: '/',
        method: 'GET',
        headers: {
            'Connection': 'close' // явно закрываем соединение после каждого запроса
        }
    };

    const req = http.request(options, (res) => {
        res.on('data', () => {}); // читаем ответ, но не используем его
        res.on('end', () => {
            requestsSent++;
            if (requestsSent < totalRequests) {
                sendRequest();
            } else {
                console.log(`HTTP with Connection: close: All requests sent in ${Date.now() - startTime} ms`);
            }
        });
    });

    req.end();
}

sendRequest();
