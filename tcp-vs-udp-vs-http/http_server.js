// http_server.js
import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from HTTP server');
});

server.listen(3000, () => {
    console.log('HTTP server listening on port 3000');
});
