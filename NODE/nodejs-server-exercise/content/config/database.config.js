const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


module.exports = (config) => {
    mongoose.connect(config.connectionSctring);
  

    let database = mongoose.connection;

    database.on('open', (err) => {
        if(err){
            console.log(err);
            return;
        }

        console.log('Connected!');
    });

    database.on('error',(err) => {
        console.log(err);
    });

    require('../models/product');
}; 