const express = require('express');
const http = require('http');
const socket = require('socket.io');
const logger = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const publicPath = path.join(__dirname, 'public');
console.log(publicPath);

app.use('/public', express.static(publicPath));
app.use(logger('dev'));

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
app.get('/client-popup', (_, res) => res.sendFile(path.join(__dirname, 'public/Pop-Up/chat-client.html')));
app.get('/client-messenger', (_, res) => res.sendFile(path.join(__dirname, 'public/Messenger-Page/client-messenger.html')));

server.listen(PORT, () => console.log(`server running on ${PORT}`));
