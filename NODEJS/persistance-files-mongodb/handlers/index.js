const homeHandler = require('./home');
const productHandler = require('./product');
const fileHandler = require('./static-files');
const categoryHandler = require('./category');

module.exports = [ homeHandler, productHandler, categoryHandler,fileHandler ];