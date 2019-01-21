let products = [];
let count = 1;

module.exports.products = {};

module.exports.products.getAll = () => {
    return products;
};

module.exports.products.add = (product) => {
    product.id = count++;
    products.push(product);
};

module.exports.products.findByName = (name) => {
    let product = null;

    for(let product of products){
        if(product === name){
            return product;
        }
    }
    return product;
};