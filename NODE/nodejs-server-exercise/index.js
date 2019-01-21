const http = require('http');
const port = 7411;
const url = require('url');

let enviroment = 'development';
const config = require('./content/config/config');
const database = require('./content/config/database.config');

const handlers = require('./content/index');

database(config[enviroment]);


http
    .createServer((req,res) => {
         req.path = url.parse(req.url).pathname;
       
        for(let handler of handlers){
            let next = handler(req,res);

            if(!next){
                break;
            }
        }
       
    })
    .listen(port);
    console.log('listening');