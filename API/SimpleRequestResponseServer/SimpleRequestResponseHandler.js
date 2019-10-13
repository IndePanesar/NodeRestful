const moment = require('moment')
// Handle simple GET request
function handleRequest_Get(request, response){
  response.writeHead(200, {
      "Content-Type" : "text/plain"
  });
  response.end(`GET - request received on ${moment().format('YYYY-MM-DD HH:mm:ss')}.`);
}

// Handle simple POST request
function handleRequest_Post(request, response){
    response.writeHead(200, {
        "Content-Type" : "text/plain"
    });
    response.end(`POST - request received on ${moment().format('YYYY-MM-DD hh:mm:ss')}.`);
  }

  // Handle simple PUT request
function handleRequest_Put(request, response){
    response.writeHead(200, {
        "Content-Type" : "text/plain"
    });
    response.end(`PUT - request received on ${moment().format('YYYY-MM-DD HH:mm:ss')}.`);
  }

  // Handle simple HEAD request
function handleRequest_Head(request, response){
    response.writeHead(200, {
        "Content-Type" : "text/plain"
    });
    response.end(`HEAD - request received on ${moment().format('YYYY-MM-DD HH:mm:ss')}.`);
  }

  // Handle simple DELETE request
function handleRequest_Delete(request, response){
    response.writeHead(200, {
        "Content-Type" : "text/plain"
    });
    response.end(`DELETE - request received on ${moment().format('YYYY-MM-DD hh:mm:ss')}.`);
  }

  // Handle simple BAD request
function handleBadRequest(request, response){
    response.writeHead(400, {
        "Content-Type" : "text/plain"
    });
    response.end(`BAD - request received on ${moment().format('YYYY-MM-DD hh:mm:ss')}.`);
  }

  exports.handle_request = function(request, response){
      switch (request.method)
      {
        case "GET":
            handleRequest_Get(request, response);
            break;
        case "POST":
            handleRequest_Post(request, response);
            break;
        case "PUT":
            handleRequest_Put(request, response);
            break;
        case "DELETE":
            handleRequest_Delete(request, response);
            break;
        case "HEAD":
            handleRequest_Head(request, response);
            break;
        case "BAD":
            hadleBadRequest_Bad(request, response);
            break;
        default:
            handleBadRequest(request, response);
            break;
      }
      console.log(`Request processing completed for request ${request.method}.`);
  };
  