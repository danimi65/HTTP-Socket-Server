const net = require('net');

// v--------socket connection to server

var server = net.createConnection(8080, 'localhost',() => {
  console.log('Connected to:');
  // process.stdout.write('Enter your username:');
});

server.on('connect', () => {
  process.stdin.pipe(server);
});