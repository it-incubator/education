// server.js
import net from 'net';

const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        console.log('Received from client:', data.toString());

        // Отправляем ответ через то же соединение
        socket.write('Response from server');
    });

    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});