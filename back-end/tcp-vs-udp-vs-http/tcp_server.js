// tcp_server.js
import net from 'net';

const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        socket.write('Hello from TCP server');
    });
});

server.listen(3001, () => {
    console.log('TCP server listening on port 3001');
});
