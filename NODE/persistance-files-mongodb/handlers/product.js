const url = require('url');
const fs = require('fs');
const Product = require('../models/Product');
const qs = require('querystring');
const Category = require('../models/Category');

module.exports = (req,res) => {
    req.path = req.path || url.parse(req.url).pathname;

    if(req.path === '/product/add' && req.method === 'GET'){
        fs.readFile('./views/products/add.html', (err,data) => {
            if(err){
                console.log(err);
                return;
            }

            Category
                .find()
                .then(categories => {
                    let result = '<select class="input-field" name="category">';

                    for(let category of categories){
                        result += `$<option value="${category._id}">${category.name}</option>`;
                    }
                    result += '</select>';
                    data = data.toString().replace('{{categories}}',result);
                    res.writeHead(200, {
                        'Content-type':'text/html'
                    });
                    res.write(data);
                    res.end();

                });
        });
    }else if(req.path === '/product/add' && req.method === 'POST'){
        let dataString = '';

        req.on('data', (data) => {
            dataString += data;
        });
        req.on('end', () => {
            let product = qs.parse(dataString);
            Product.create(product).then((insertedProduct) => {
                Category.findById(product.category).then(category => {
                    category.products.push(insertedProduct._id);
                    category.save();
                    res.writeHead(302, {
                        Location: '/'
                    });
    
                    res.end();
                });
            });
        });
    }else {
        return true;
    }
};