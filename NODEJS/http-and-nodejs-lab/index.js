const http = require('http');
const port = 8000;
let url = require('url');
const handlers = require('./handlers/index');

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
    console.log('Here');