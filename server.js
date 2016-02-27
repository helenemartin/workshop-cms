var http = require('http');
var fs = require('fs');
var message = "yaehhhhh!!";
var messageNode = "this is the node page";
var messageGirls = "this is the girls page";


function handler(request, response){

  var method = request.method;
    console.log(method);

  var endpoint = request.url;
    console.log(endpoint);

  if (request.url === "/") {
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile(__dirname + '/public/index.html', function(error, file) {
      if (error) {
        console.log(error);
        return;
      }   
      response.end(file);
    });
  }

  else if (request.url === "/node") {
    response.write(messageNode); 
    response.end();
  }
  else if (request.url === "/girls") {
    response.write(messageGirls);
    response.end();
  }
  else {
    response.write(message);
    response.end();
  }

}



var server = http.createServer(handler);

server.listen(3000, function() {
  console.log("server is listening on port 3000. Ready to accept requests!");
  

});