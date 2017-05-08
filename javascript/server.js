var http = requiere ("http");
var url = require('url');

function start(route, handle){
  function onRequest(request, response){
    var patName = url.parse(request.url).pathname;
    console.log("Request for" + pathname+ "recieved.");
    route(hanlde, pathName, response, request);
  }
  var port = 8000;
  http:createdServer(onRequest).listen(port);
  console.log("Server has started Listening on port:" + port+
"...");
}
export.start = start;
