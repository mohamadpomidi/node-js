/*
 * 1.Run Server
 * $ node tcp_server.js
 *
 * 2.Telnet Connect
 * $ telnet 127.0.0.1 8111
 *
 */

var net = require('net');

var server = net.createServer(function(socket){

    console.log('connected');
    socket.write('welcome to node.js server\n');

    //Connect
    socket.on('data', function(data){
        socket.write('you said ' + data);
    });

    //Close
    socket.on('end', function(){
        console.log('end');
    });
})

server.listen(8111);
console.log('server start listening on 8111');