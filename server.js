import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use('/api', createProxyMiddleware({ target: 'http://localhost:8080', logLevel: 'silent' }));

app.use('/', express.static('src'));
app.use('/public', express.static('./public'));
app.use('/artworkjs', express.static('./node_modules/artworkjs/src'));

app.get('*', (req, res) => res.sendFile(path.join(path.dirname(fileURLToPath(import.meta.url)), '/public/index.html')));

const server = app.listen(3000);

export default server;
