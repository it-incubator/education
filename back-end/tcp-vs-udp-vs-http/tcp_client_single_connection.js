// tcp_client.js
import net from 'net';

const startTime = Date.now();
let requestsSent = 0;
const totalRequests = 10000;

const client = new net.Socket();

client.connect(3001, 'localhost', () => {
    console.log('Connected to server with keep-alive');
    sendRequest();
});

client.on('data', () => {
    requestsSent++;
    if (requestsSent < totalRequests) {
        sendRequest();
    } else {
        console.log(`TCP with keep-alive: All requests sent in ${Date.now() - startTime} ms`);
        client.end();
    }
});

function sendRequest() {
    client.write('Request from TCP client');
}
