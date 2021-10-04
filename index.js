const express = require('express');
const app = express();
const { Server } = require('socket.io');
const http = require('http');
const server = http.createServer(app);

const io = new Server(server)

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
   console.log('user connected')
   socket.on('on-chat', data => {
      io.emit('user-chat', data)
   })
})

server.listen(3000, () => {
   console.log('localhost:3000')
})
