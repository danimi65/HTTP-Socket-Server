const net = require('net');
const fs = require('fs');
const PORT = 8080;
const timestamp = new Date();

//Start a server
var server = net.createServer((socket) => {

  socket.setEncoding('utf8');
  socket.on('data', (chunk) => {
    var response = `Status Code: \n
    Date: ${timestamp}\n
    Server: Andreas Server\n`;

    socket.write(response);

    console.log('chunk', chunk);
    socket.end();
  });
});

server.listen(8080, 'localhost', () => {
  console.log('opened server on', server.address());
});