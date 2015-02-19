/**
 * Created by bassochette on 18/02/15.
 */
var dgram = require('dgram');
//var process = require('process');
var port = 4242;
var client = dgram.createSocket('udp4');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function(){

    var chunk = process.stdin.read();

    if(chunk != null){
        client.send(new Buffer(chunk), 0, chunk.length, 4242, 'localhost', function(err, message){
            console.log("Errors: "+ JSON.stringify(err));

            if(chunk.length == message){
                console.log('FOoOoOoOoOOooooo!!!!!');
            } else {
                console.log('Saaaaaad');
            }
        });
    }
});

process.stdin.on('end', function(){


});



