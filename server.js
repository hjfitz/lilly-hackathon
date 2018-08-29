const express = require('express');
const http = require('http');
const socket = require('socket.io');
const logger = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(logger('dev'));

// app.use(express.static(path.join(__dirname, 'pubilc')));


const server = http.createServer(app);

// set up websocket
const io = socket(server);

const queries = {
  testName: [
    { name: 'testName', message: 'help' },
    { name: 'helper', message: 'yh ok nerd' },
  ],
  name2: [
    { name: 'name2', message: 'o jesus no' },
    { name: 'helper', message: 'sure' },
    { name: 'name2', message: 'i ate an bleach' },
  ],
};

io.on('connect', (socket) => {
  console.log('[SOCKET] Connection instantiated');
  socket.on('getQueries', () => {
    socket.emit('queries', queries);
  });

  socket.on('message', (s) => {
    console.log(s);
  });
  socket.on('clientInit', s => console.log(s));
});
app.get('/server', (_, res) => res.sendFile(path.join(__dirname, 'public/chat-server.html')));
app.get('/client', (_, res) => res.sendFile(path.join(__dirname, 'public/chat-client.html')));

server.listen(PORT, () => console.log(`server running on ${PORT}`));
