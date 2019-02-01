const User = require('../data/User');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = (settings) => {
    mongoose.connect(settings.db, { useNewUrlParser: true });
    mongoose.set('useCreateIndex', true);
    

    let db = mongoose.connection;

    db.once('open', err => {
        if(err){
            throw err;
        }

        console.log('MongoDB ready!');
        User.seedAdminUser();
    });

    db.on('error', (err) => {
        console.log(`Database error -> ${err}`);
    });
};