const User = require('../models/User');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


module.exports = config => {
    mongoose.connect(config.dbPath, {
        useNewUrlParser: true
    });       
    const db = mongoose.connection;
    db.once('open', err => {
        if (err) {
            console.log(err);
        } 

        User.seedAdmin();
        console.log('Data is ready!');
    });

    db.on('error', reason => {
        console.log(reason);
    });
};