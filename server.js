/**
 * Created by bassochette on 18/02/15.
 */
var dgram = require('dgram');
var port = 4242;
var socket = dgram.createSocket('udp4');

socket.bind(port , function(){



});

socket.on('listening', function(){
    console.log("socket started listening "+port);
});

socket.on('message', function(msg, rinfo){

    console.log('Message : '+msg);
    console.log('rinfo :'+JSON.stringify(rinfo));

    socket.send(new Buffer(msg.length), 0, msg.length, rinfo.port, rinfo.address);
});

socket.on('close', function(){
    console.log("Socket's dead!");
});

socket.on('error', function(error){

});