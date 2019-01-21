const fs = require('fs');
const path = require('path');
const qs = require('querystring');
let database = require('../config/dataBase');

module.exports = (req, res) => {
    if (req.path === '/addMovie' && req.method === 'GET') {
        fs.readFile(path.join(__dirname, '../views/addMovie.html'), (err, data) => {
            if (err) {
                console.log(err);
                return;
            }

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            res.end();

        });
    } else if (req.path === '/addMovie' && req.method === 'POST') {
        //let addMovieHtml = fs.createReadStream(path.join(__dirname, '../views/addMovie.html'));
        let dataString = '';
        //  let message = '';

        req.on('data', (data) => {
            dataString += data;
            let movie = qs.parse(dataString);
            if (movie.movieTitle === "" || movie.moviePoster === "") {
                //message += '<div id="errBox"><h2 id="errMsg">Please fill all fields</h2></div>';
               throw new Error('Please fill everything');
            } else {
                //message += '<div id="succssesBox"><h2 id="succssesMsg">Movie Added</h2></div>';
                database.push(movie);
            }
            
            res.writeHead(302, {
                Location: '/viewAll'
            });
           
        });



        req.on('end', () => {


            res.end();

        });

    }
};

