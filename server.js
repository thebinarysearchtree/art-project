import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use('/api', createProxyMiddleware({ target: 'http://localhost:8080', logLevel: 'silent' }));

app.use('/', express.static('src'));

app.get('*', (req, res) => res.sendFile(path.join(path.dirname(fileURLToPath(import.meta.url)), '/src/index.html')));

const server = app.listen(3000);

export default server;
