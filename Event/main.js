//invoke event module
var events = require('events');
//create eventEmitter Object
var eventEmitter = new events.EventEmitter();
//

// callback
var connectionHandler = function connected() {
    console.log("connected successfully");
    eventEmitter.emit('data_received');
}

eventEmitter.on('data_received',function(){
    console.log('data revieved successfully');
});

eventEmitter.on('connection',connectionHandler);

eventEmitter.emit('connection');

console.log("it is done");
