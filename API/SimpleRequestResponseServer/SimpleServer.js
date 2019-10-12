// A simple request/response node server  module to handle simple requests
const simpleServer = require("./SimpleRequestResponseHandler.js");
const  http = require("http");
const port = 8181;

http.createServer(simpleServer.handle_request).listen(port, "127.0.0.1");