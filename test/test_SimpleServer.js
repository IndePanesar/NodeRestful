const sinon = require("sinon");
exports.test_handleRequest_Get = function(test){
    const moment = require("moment");
    let response = {
        "writeHead": function(){},
        "end": function(){}
    };
    let responseMock = sinon.mock(response);
    responseMock.expects('writeHead').once().withArgs(200, {
        "Content-Type" : "text/plain"
    });
    responseMock.expects('end').once().withArgs(`GET - request received on ${moment().format('YYYY-MM-DD HH:mm:ss')}.`);

    let request = {};
    let requestMock = sinon.mock(request);
    requestMock.method = "GET";
    const simpleServerHandler = require("../API/SimpleRequestResponseServer/SimpleRequestResponseHandler");
    simpleServerHandler.handle_request(requestMock, response);
    responseMock.verify();
    test.done();
};

exports.test_handleRequest_Post = function(test){
    const moment = require("moment");
    let response = {
        "writeHead": function(){},
        "end": function(){}
    };
    let responseMock = sinon.mock(response);
    responseMock.expects('writeHead').once().withArgs(200, {
        "Content-Type" : "text/plain"
    });
    responseMock.expects('end').once().withArgs(`POST - request received on ${moment().format('YYYY-MM-DD hh:mm:ss')}.`);

    let request = {};
    let requestMock = sinon.mock(request);
    requestMock.method = "POST";
    const simpleServerHandler = require("../API/SimpleRequestResponseServer/SimpleRequestResponseHandler");
    simpleServerHandler.handle_request(requestMock, response);
    responseMock.verify();
    test.done();
};

exports.test_handleRequest_Put = function(test){
    const moment = require("moment");
    let response = {
        "writeHead": function(){},
        "end": function(){}
    };
    let responseMock = sinon.mock(response);
    responseMock.expects('writeHead').once().withArgs(200, {
        "Content-Type" : "text/plain"
    });
    responseMock.expects('end').once().withArgs(`PUT - request received on ${moment().format('YYYY-MM-DD HH:mm:ss')}.`);

    let request = {};
    let requestMock = sinon.mock(request);
    requestMock.method = "PUT";
    const simpleServerHandler = require("../API/SimpleRequestResponseServer/SimpleRequestResponseHandler");
    simpleServerHandler.handle_request(requestMock, response);
    responseMock.verify();
    test.done();
};

exports.test_handleRequest_Head = function(test){
    const moment = require("moment");
    let response = {
        "writeHead": function(){},
        "end": function(){}
    };
    let responseMock = sinon.mock(response);
    responseMock.expects('writeHead').once().withArgs(200, {
        "Content-Type" : "text/plain"
    });
    responseMock.expects('end').once().withArgs(`HEAD - request received on ${moment().format('YYYY-MM-DD HH:mm:ss')}.`);

    let request = {};
    let requestMock = sinon.mock(request);
    requestMock.method = "HEAD";
    const simpleServerHandler = require("../API/SimpleRequestResponseServer/SimpleRequestResponseHandler");
    simpleServerHandler.handle_request(requestMock, response);
    responseMock.verify();
    test.done();
}