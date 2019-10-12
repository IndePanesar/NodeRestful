const http = require("http");
const port = 8180;

function handleRequest(request, response){
    response.writeHead(200, {
        "Content-type" : "text/plain"
    });
    response.end("Hello World. This is from NodeServer!!");
    console.log("requested");
}

http.createServer(handleRequest).listen(port, "127.0.0.1");
console.log("server is running on localhost port 8180.");
