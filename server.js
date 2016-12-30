const net = require('net');
const timestamp = new Date();
const staticContent = require('./staticContent');

var server = net.createServer((socket) => {

  socket.setEncoding('utf8');

  socket.on('data', (chunk) => {
    var response = `Status Code:\n
    Date: ${timestamp}\n
    Server: My Custom Server\n`;
    socket.write(response);

    var string = chunk;
    var split = string.split(" ");

    if (split[1] === "/"){
      process.stdout.write(staticContent.index_html);
    }
    else if (split[1] === "/index.html") {
      process.stdout.write(staticContent.index_html);
    }
    else if (split[1] === "/hydrogen.html") {
      console.log(staticContent.hydrogen_html);
    }
    else if (split[1] === "/helium.html") {
      console.log(staticContent.helium_html);
    }
    else if (split[1] === "/404.html") {
      console.log(staticContent.error_html);
    }
  });
});

server.listen(8080, 'localhost', () => {
  console.log('opened server on', server.address());
});