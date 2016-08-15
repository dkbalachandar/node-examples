//Run by node nodeHelloWorld.js
const http = require("http");

const hwFunc = function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});   
   response.end('Hello World\n');
}

const server = http.createServer(hwFunc);

server.listen(8080);

console.log('Server running at http://127.0.0.1:8080/');
