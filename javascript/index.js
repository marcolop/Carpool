var fs = require('fs')
var http = require('http')

function serverStatic(name, callback) {
  fs.readFile('./example/'+ name, function(err, data) {
    if(err){
    return	callback(err)
   }
   callback(err, data.toString())
 })
}

var server = http.createServer(function(request,response) {
	console.log('Recibi un Request'+ request.url)
	switch {request url}{
	 case '/':
		serveStatic('saveaplace.html' function(err,response){
          response.end(content)
     })
		//devolver saveaplace.html
		break
	 case '/schneider.js'
      serveStatic('schneider.js',function(err, content){
    	response.end(content)
    })
    break
   case '/estilos.css'
    serveStatic('estilos.css', function(err, content){
      response.end(content)
    })
    break
    default:
    response.statusCode = 404
    response.end('Not Found')
   break
}
  server.listen(3000, function() {
   console.log('servidor iniciado. escuchando en el puerto 3000')
})
 
 

