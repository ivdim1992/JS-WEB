let fs = require('fs');



module.exports = (req,res) => {
    if(req.path === '/images/details/0'){
       
    }else {
        return true;
    }

    if(req.method === 'GET'){
        fs.readFile('./content/views/details-image.html','utf8',(err,data) => {
            if(err){
                console.log(err);
                return;
            }
           
            let images = database.getAll();
            let result = '';

            for(let i = 0; i < images.length; i+= 1){
                let image = images[i];
                result += `<img src="${image.url}" alt="picture"></img>`;
            }
            
            data = data.replace('{{content}}',result);

            res.writeHead(200, {
                'Content-type':'text/html'
            });
            res.write(data);
            res.end();
        });

    }

    
};