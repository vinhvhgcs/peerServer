const express = require("express");
const { ExpressPeerServer } = require('peer');
const app = express();

app.get('/', (req, res, next) => res.send('Hello world!'));

const peer = app.listen(9000);

const peerServer = ExpressPeerServer(peer, {
  path: '/'
});

app.use("/", peerServer);