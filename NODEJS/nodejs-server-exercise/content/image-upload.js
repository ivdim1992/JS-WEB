const fs = require('fs');
const query = require('querystring');


module.exports = (req,res) => {
    if(req.path !== '/images/upload'){
        return true;
    }

    if(req.method === 'GET'){
        fs.readFile('./content/views/image-upload.html', (err,data) => {
            if(err){
                console.log(err);
                return;
            }
            res.writeHead(200, {
                'Content-Type':'text/html'
            });
            res.write(data);
            res.end();
        });
    }else if(req.method === 'POST'){
        let result = '';
        req.on('data', data => result += data);
        req.on('end', () => {
            let imageData = query.parse(result);

            let imageName = imageData.name;
            let imageUrl = imageData.url;

            if(!imageName || !imageUrl){
                fs.readFile('./content/views/image-error.html/', (err,data) => {
                    if(err){
                        console.log(err);
                        return;
                    }
                    res.writeHead(200, {
                        'Content-type':'text/html'
                    });
                    res.write(data);
                    res.end();
                });
            }else {
                database.save(imageData);
            
                res.writeHead(302, {
                    'Location': '/'
                });
                res.end();
            }
        });
    }
};
