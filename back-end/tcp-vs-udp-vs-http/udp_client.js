// udp_client.js
import dgram from 'dgram';

const startTime = Date.now();

const client = dgram.createSocket('udp4');
let requestsSent = 0;
const totalRequests = 10000;

function sendRequest() {
    const message = Buffer.from('Request from UDP client');
    client.send(message, 3002, 'localhost', (err) => {
        if (err) throw err;
        requestsSent++;
        if (requestsSent < totalRequests) {
            sendRequest();
        } else {
            console.log(`UDP: All requests sent in ${Date.now() - startTime} ms`);
            client.close();
        }
    });
}

sendRequest();
