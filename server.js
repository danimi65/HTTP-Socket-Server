const net = require('net');
const fs = require('fs');
const timestamp = new Date();
const url = require('url')

//Start a server
var server = net.createServer((socket, res) => {


  socket.setEncoding('utf8');
  socket.on('data', (chunk) => {
    var response = `Status Code:\n
    Date: ${timestamp}\n
    Server: My Custom Server\n`;

    socket.write(response);

    if ('./index.html') {
      fs.readFile('./index.html', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
      });
    }
    else if (filePath === './hydrogen.html') {
      fs.readFile('./hydrogen.html', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
      });
    }
    else if (filePath === './helium.html') {
      fs.readFile('./hydrogen.html', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
      });
    }

    socket.end('data', () => {
    console.log('Connection closed');
    });
  });

});

server.listen(8080, 'localhost', () => {
  console.log('opened server on', server.address());
});