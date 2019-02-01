const homeHandler = require('./home');
const productHandler = require('./product');
const fileHandler = require('./static-files');

module.exports = [ homeHandler, productHandler, fileHandler ];