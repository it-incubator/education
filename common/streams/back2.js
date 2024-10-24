import express from 'express';
import cors from 'cors';
import fs from 'fs';
const app = express();
const port = 3001;

app.use(cors());

// amazon s3
app.post('/endpoint', (req, res) => {
    req.setEncoding('utf8');
    req.on('data', chunk => {
        console.log(chunk)
    });
    req.on('end', () => {
        res.sendStatus(200);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
