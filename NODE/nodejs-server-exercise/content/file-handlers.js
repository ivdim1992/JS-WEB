const fs = require('fs');

let getContentType = function(url) {
    let contentType = 'text/plain';

    if(url.endsWith('.css')){
        contentType = 'text/css';
    }else if (url.endsWith('.js')){
        contentType = 'application/javascript';
    }

    return contentType;
};

let validExtension = (path) => {
    if(path.endsWith('.html') || path.endsWith('.css') || path.endsWith('.js') || path.endsWith('.jpg')){
        return true;
    }
    return false;
};

module.exports = (req,res) => {
    fs.readFile('.' + req.path,(err,data) => {
        if(err || req.method !== 'GET' || !req.path.startsWith('/content') || !validExtension(req.path)){
            res.writeHead(404);
            res.write('404 -> The page is not found');
            res.end();
            return;
        }
        res.writeHead(200, {
            'Content-Type': getContentType(req.url)
        });
        res.write(data);
        res.end();
    });
};