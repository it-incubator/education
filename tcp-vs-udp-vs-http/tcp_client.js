// tcp_client.js
import net from 'net';

const startTime = Date.now();

let requestsSent = 0;
const totalRequests = 10000;

function sendRequest() {
    const client = new net.Socket();
    client.connect(3001, 'localhost', () => {
        client.write('Request from TCP client');
    });

    client.on('data', () => {
        requestsSent++;
        client.destroy();
        if (requestsSent < totalRequests) {
            sendRequest();
        } else {
            console.log(`TCP: All requests sent in ${Date.now() - startTime} ms`);
        }
    });
}

sendRequest();
