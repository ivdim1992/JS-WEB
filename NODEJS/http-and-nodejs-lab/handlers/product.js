const url = require('url');
const database = require('../config/database');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');

module.exports = (req,res) => {
    req.path = req.path || url.parse(req.url).pathname;

    if(req.path === '/product/add' && req.method === 'GET'){
        fs.readFile('./views/products/add.html', (err,data) => {
            if(err){
                console.log(err);
                return;
            }
            res.writeHead(200, {
                'Content-type':'text/html'
            });
            res.write(data);
            res.end();
        });
    }else if(req.path === '/product/add' && req.method === 'POST'){
        let dataString = '';

        req.on('data', (data) => {
            dataString += data;
        });

        req.on('end', () => {
            let product = qs.parse(dataString);
            database.products.add(product);

            res.writeHead(302, {
                Location: '/'
            });

            res.end();
        });

    }else {
        return true;
    }
};