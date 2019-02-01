/* eslint-disable no-console */
const http = require('http');
const port = 5268;
const url = require('url');
const handlers = require('./handlers/index');

http.
    createServer((req,res) => {
        
     req.path = url.parse(req.url).pathname;
     console.log(req.path);

        for(let handler of handlers) {
            handler(req,res);
        }
      
    })
    .listen(port);

    console.log(`Server listening on port ${port}`);