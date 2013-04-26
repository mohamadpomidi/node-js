/*

 POST / HTTP/1.1
 Host: junk.clan.vc
 Content-Type: application/x-www-form-urlencoded
 Content-Length: 68

 {"hoge":"hogehoge","hoge2":"homhom","hoge3":{"hoge":"hogehogehoge"}}

 */

var http  = require('http');

var server = http.createServer(function(req,res){

    //Get
    getRequest(req.url);

    //Post
    req.on('data', function(chunk){
        postRequest(chunk);
        //res.writeHead(200, {'Content-Type': 'application/json'});
        //TODO return json
    });

    //res.end(getData());
});

server.listen(8080);
console.log('server started on 8080');


/*******************
 * Private Method
 *******************/

function getData(){

    str = "Disnnect";
    return str;

}

function getRequest(url){

    console.log(url);

}

function postRequest(chunk){

    var urlinfo = require('url').parse('/?'+chunk.toString(), true);
    var jsonStr = urlinfo.search.split("?")[1].replace(/%22/g,"\"");
    jsonObj = JSON.parse(jsonStr);
    console.log(jsonObj.hoge);

    return null;

}