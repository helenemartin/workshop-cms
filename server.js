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
  
  if (endpoint === "/") {
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile(__dirname + '/public/index.html', function(error, file) {
      if (error) {
        console.log(error);
        return;
      }   
      response.end(file);
    });
  }

  else if (endpoint === "/node") {
    response.write(messageNode); 
    response.end();
  }
  else if (endpoint === "/girls") {
    response.write(messageGirls);
    response.end();
  }
  else  {
    fs.readFile(__dirname + "/public" + endpoint, function(error, file){
      if (error) {
        console.log(error);
        return;
      } 
      response.end(file);
    });
   
  }

}



var server = http.createServer(handler);

server.listen(3000, function() {
  console.log("server is listening on port 3000. Ready to accept requests!");
  

});