//http://localhost:8080/?hoge=eeee

var http  = require('http');

var server = http.createServer(function(req,res){

    //
    getRequest(req.url);

    //
    req.on('data', function(chunk){
        //postRequest(chunk);
        var urlinfo = require('url').parse('/?'+chunk.toString(), true);
        //var jsonObj = JSON.parse(urlinfo);
        console.log(urlinfo);
    });

    //
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(getData());
});

server.listen(8080);
console.log('server started on 8080');







/*******************
 * Private Method
 *******************/

function getData(){

    str = "{hoge:'hogehoge',hoge2:'homhom'}";
    return str;

}

function getRequest(url){

    console.log(url);

}

function postRequest(chunk){

    /*

     { protocol: null,
     slashes: null,
     auth: null,
     host: null,
     port: null,
     hostname: null,
     hash: null,
     search: '?a=abcd&b=1234',
     query: { a: 'abcd', b: '1234' },
     pathname: '/',
     path: '/?a=abcd&b=1234',
     href: '/?a=abcd&b=1234' }

     */

    var urlinfo = require('url').parse('/?'+chunk.toString(), true);
    var jsonObj = JSON.parse(urlinfo);
    console.log(urlinfo);

}