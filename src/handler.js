
var fs = require('fs');
var querystring = require('querystring');


function handler(request, response){

  var method = request.method;
    console.log(method);

  var endpoint = request.url;
    console.log(endpoint);
 

  if (endpoint === "/") {
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile('./assets/index.html', function(error, file) {
      if (error) {
        console.log(error);
        return;
      }   
      response.end(file);
    });
  }

  else if (endpoint === "/create-post") {
    response.writeHead(200, {"Content-Type": "text/html"});
    var allTheData = '';
    
    request.on('data', function (chunkOfData) {
      allTheData += chunkOfData;
    });

    request.on('end', function(){ 
      var convertedData = querystring.parse(allTheData);
      console.log(convertedData);
      response.end();
    });
  }
  else if (endpoint === "/girls") {
    response.write(messageGirls);
    response.end();
  }
  else  {
    fs.readFile("./assets" + endpoint, function(error, file){
      if (error) {
        console.log(error);
        return;
      } 
      response.end(file);
    });
   
  }

}
module.exports = handler;