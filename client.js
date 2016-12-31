const net = require('net');

// v--------socket connection to server

var client = net.createConnection(8080, 'localhost',() => {
  console.log('Connected');
});

client.on('connect', () => {
  process.argv.pipe(client);
});

client.on('data', (request) => {
  process.argv.write(request);
});

client.end('data', () => {
  console.log('Connection closed');
});