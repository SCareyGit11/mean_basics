// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');

var port = 7077
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('./views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }    
    else if (request.url === "/stylesheets/style.css") {    
        fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if (request.url === "/cars") {
         fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });    
    }
    else if (request.url === "/images/one.jpeg") {    
        fs.readFile('./images/one.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if (request.url === "/images/two.jpeg") {    
        fs.readFile('./images/two.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if (request.url === "/images/three.jpeg") {    
        fs.readFile('./images/three.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if (request.url === "/cats") {
         fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });    
    }
    else if (request.url === "/images/four.jpeg") {    
        fs.readFile('./images/four.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if (request.url === "/images/five.jpeg") {    
        fs.readFile('./images/five.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if (request.url === "/images/six.jpeg") {    
        fs.readFile('./images/six.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end(' the URL requested is not available ');
    }
});
// tell your server which port to run on
server.listen(port);
// print to terminal window
console.log("Running in localhost at port", port);