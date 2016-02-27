var http = require('http');
var message = "yaehhhhh!!";
var messageNode = "this is the node page";
var messageGirls = "this is the girls page";

function handler(request, response){

  var method = request.method;
    console.log(method);

  var endpoint = request.url;
    console.log(endpoint);

  if (request.url === "/node") {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(messageNode);
    response.end();
  }
  else if (request.url === "/girls") {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(messageGirls);
    response.end();
  }
  else {
    response.writeHead(200,{"Content-Type": "text/html"});
    response.write(message);
    response.end();
  }
}

var server = http.createServer(handler);

server.listen(3000, function() {
  console.log("server is listening on port 3000. Ready to accept requests!");
  

});