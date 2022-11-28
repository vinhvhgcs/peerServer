const express = require("express");
const { ExpressPeerServer } = require('peer');
const app = express();

const peer = app.listen(9000);

const peerServer = ExpressPeerServer(peer, {
  path: '/'
});

app.use("/stream", peerServer);