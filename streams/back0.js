import express from 'express';
import cors from 'cors';
import fs from 'fs';
const app = express();
const port = 3000;

app.use(cors());

app.post('/endpoint', express.json({ limit: '100mb' }), (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});

app.post('/endpoint2', (req, res) => {

    req.setEncoding('utf8');
    let body = ''
    req.on('data', chunk => {
        body += chunk;
    });

    req.on('end', () => {
        console.log('FINISHED');
        res.sendStatus(200);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
