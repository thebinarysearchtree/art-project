import express from 'express';

const app = express();

app.use('/', express.static('src'));

const server = app.listen(3000);

export default server;
