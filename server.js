const net = require('net');

//Start a server
var server = net.createServer((socket) => {

  socket.on('data', () => {

  });

});

server.listen(8080, '0.0.0.0', () => {
  console.log('opened server on', server.address());
});