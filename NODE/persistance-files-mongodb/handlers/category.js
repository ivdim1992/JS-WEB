const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const Category = require('../models/Category');

module.exports = (req,res) => {
    if(req.path === '/category/add' && req.method === 'GET'){
        fs.readFile(path.join(__dirname,'../views/category/add.html'), (err,data) => {
            if(err){
                console.log(err);
                return;
            }

            res.writeHead(200, {
                'Content-Type':'text/html'
            });
            res.write(data);
            res.end();
        });
    }else if(req.path === '/category/add' && req.method === 'POST'){
        let queryData = '';

        req.on('data',(data) => {
            queryData += data;
        });

        req.on('end',() => {
            let category = qs.parse(queryData);
            Category.create(category).then(() => {
                res.writeHead(302,{
                    Location: '/'
                });
                res.end();
            });
        });
    }else {
        return true;
    }
};