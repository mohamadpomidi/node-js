var http  = require('http');

var server = http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(getData());
});

server.listen(8080);
console.log('server started on 8080');


function getData(){

	str = "{hoge:'hogehoge',hoge2:'homhom'}";
	return str;
	
}