const express = require('express');
const port = 5000;
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let env = process.env.NODE_ENV || 'development';


let app = express();

app.get('/', (req, res) => {

    mongoose
        .connect('mongodb://localhost:27017/architechtureTemplate')
        .then(() => {
            console.log('MongoDb ready');
            res.send('Hello frmo EXpresSnod');
        });
            
   

});

app.listen(port, () => console.log(`App listening on port ${port}`));

