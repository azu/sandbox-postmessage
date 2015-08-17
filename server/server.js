// LICENSE : MIT
"use strict";
var staticServer = require('node-static');
var file = new staticServer.Server(__dirname + "/../");
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(8000);
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(8001);
console.log("http://localhost:8000");
console.log("http://localhost:8001");