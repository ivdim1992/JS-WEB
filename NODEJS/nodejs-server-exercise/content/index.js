const statusHeader = require('./status-header'); 
const homePageHandler = require('./home-page');
const favIcon = require('./fav-icon');
const fileHandler = require('./file-handlers');
const imageUpload = require('./image-upload');
const imageDetails = require('./image-details');

module.exports = [
    statusHeader,
    homePageHandler,
    favIcon,
    imageDetails,
    imageUpload,
    fileHandler
];