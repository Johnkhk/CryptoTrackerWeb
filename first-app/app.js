const path = require('path') //existing module
const os = require('os') //existing module
const fs = require('fs')

const http = require('http')

const server = http.createServer((req, res)=> {
    if (req.url === '/') {
        res.write('Hello World')
        res.end();
    }
    if(req.url==='/api/courses') {
        res.write(JSON.stringify([1,2,3]))
        res.end()
    }
});


// const server = http.createServer();
// server.on('connection', (socket) => {
//     console.log('New connection')
// })
server.listen(3000); //listen, but need listener^

console.log('Listening on port 3000...')





// const EventEmitter = require('events');
// const emitter = new EventEmitter();




// const Logger = require('./logger');
// const logger = new Logger();

// //register listener
// logger.on('messageLogged', (arg) => { //e, arg
//     console.log('Listener Called', arg) 
//  })

// logger.log('message')



// // const files = fs.readdirSync('./')
// // console.log(files)

// // fs.readdir('./', function(err,files) {
// //     if(err) console.log('Error', err);
// //     else console.log('Result', files)
// // })

// //events