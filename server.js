const net = require('net');
const PORT = 8080;

//Start a server
var server = net.createServer((socket) => {

  socket.on('data', () => {

  });

  socket.end();

});

server.listen(8080, 'localhost', () => {
  console.log('opened server on', server.address());
});