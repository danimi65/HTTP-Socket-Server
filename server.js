const net = require('net');
// const fs = require('fs');
const timestamp = new Date();
const url = require('url');
// const staticContent = require('./staticContent');

//Start a server
var server = net.createServer((socket) => {

  socket.setEncoding('utf8');
  socket.on('data', (chunk) => {
    var response = `Status Code:\n
    Date: ${timestamp}\n
    Server: My Custom Server\n`;
    // console.log(chunk);
    socket.write(response);


    // staticContent.index_html;
    // staticContent.helium_html;
    // staticContent.hydrogen_html;
    // staticContent.error_html;

    // //HTTP Response back

    //   fs.readFile('./index.html', 'utf8', (err, data) => {
    //     if (err) throw err;
    //     console.log(data);
    //   });

    //   fs.readFile('./hydrogen.html', 'utf8', (err, data) => {
    //     if (err) throw err;
    //     console.log(data);
    //   });

    //   fs.readFile('./helium.html', 'utf8', (err, data) => {
    //     if (err) throw err;
    //     console.log(data);
    //   });

    socket.end('data', () => {
    console.log('Connection closed');
    });
  });

});

server.listen(8080, 'localhost', () => {
  console.log('opened server on', server.address());
});