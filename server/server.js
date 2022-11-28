const express = require("express");
const { ExpressPeerServer } = require('peer');
const app = express();

app.get('/', (req, res, next) => res.send('Hello world!'));

const http = require('http');

const server = http.createServer(app);
const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/'
});

app.use('/stream', peerServer);

const PORT = process.env.PORT || 443;

server.listen(PORT);