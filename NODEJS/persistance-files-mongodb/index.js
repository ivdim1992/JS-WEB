const http = require('http');
const port = 8000;
let url = require('url');
const handlers = require('./handlers/index');
let enviroment = process.env.NODE_ENV || 'development';
const config = require('./config/config');
const database = require('./config/database.config');


database(config[enviroment]);

http
    .createServer((req,res) => {
        req.path = url.parse(req.url).pathname;
        for(let handler of handlers) {
            let next = handler(req,res);

            if(!next) {
                break;
            }
        }
    }).listen(port);