// udp_server.js
import dgram from 'dgram';

const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
    const response = Buffer.from('Hello from UDP server');
    server.send(response, rinfo.port, rinfo.address);
});

server.bind(3002, () => {
    console.log('UDP server listening on port 3002');
});
