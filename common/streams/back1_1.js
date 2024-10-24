import express from 'express';
import cors from 'cors';
import http from 'http';
const app = express();
const port = 3000;

app.use(cors());

app.post('/endpoint2', (req, res) => {
    const options = {
        hostname: 'localhost',
        port: 3001,
        path: '/endpoint',
        method: 'POST',
        headers: {
            'Content-Type': 'application/octet-stream',
            'Transfer-Encoding': 'chunked'
        }
    };

    const proxyReq = http.request(options, proxyRes => {
        proxyRes.pipe(res);
    });

    req.pipe(proxyReq);

    // req.on('end', () => {
    //     proxyReq.end();
    // });

    // req.on('error', err => {
    //     console.error(err);
    //     res.sendStatus(500);
    // });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
