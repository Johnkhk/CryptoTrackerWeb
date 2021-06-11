const EventEmitter = require('events');
// const emitter = new EventEmitter();

var url = "http://mylogger.io/log"


class Logger extends EventEmitter{
    log(message) {
        //send http req
        console.log(message)
    
        //raise event
        this.emit('messageLogged', {id:1, url: 'http://'});
    }
}



// module.exports.log = log;
// module.exports = log;
module.exports = Logger;