const net = require('net'); //need to require net module to be able to use all the functions within it

const staticContent = require('./staticcontent.js');



//clientSocket is a readable and writeable stream
var server = net.createServer((clientSocket) => {

  //read data from socket as utf8 formatted text
  clientSocket.setEncoding('utf8');

clientSocket.on('data', (httpRequest) => {
  var split = httpRequest.split('\r\n');
  // console.log('split', split);
  // console.log(split[0]);

  //parse the client's http request headers 
  var requestLine = split[0];
  var requestLineSplit = requestLine.split(' ');
  var requestMethod = requestLineSplit[0];
  var requestURI = requestLineSplit[1];

  var responseHeaders =`HTTP/1.1 200 OK 
Server: nginx/1.4.6 (Ubuntu)
Date: Wed, 08 Jul 2015 22:31:15 GMT
Content-Type: text/html; charset=utf-8
Content-Length: ${staticContent.index_html.length}\n\n`;

  if(requestMethod === 'GET'){
    if(requestURI === '/'){
      console.log(responseHeaders + staticContent.index_html);
      clientSocket.write(responseHeaders + staticContent.index_html);
      clientSocket.end();
    }
  }


  



  // console.log(requestURI);

  // console.log(httpRequest);
});

});

server.listen(8080, 'localhost', ()=> {
  console.log('opened server on', server.address());

});