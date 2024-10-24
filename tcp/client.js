
// client.js
import net from 'net';

// Подключение к серверу и отправка запроса
const clientSocket = new net.Socket();
clientSocket.connect(3000, 'localhost', () => {
    console.log('Connected to server');
    clientSocket.write('Request from client');
});

// Получаем ответ на том же соединении
clientSocket.on('data', (data) => {
    console.log('Received from server:', data.toString());
    clientSocket.end();
});