const fs = require('fs');

module.exports = (req,res) => {
    if(req.path === '/') {
        fs.readFile('./index.html',(err,data) => {
            if(err){
                // eslint-disable-next-line no-console
                console.log(err);
                return;
            }
    
            res.writeHead(200, {
                'Content-Type':'text/html'
            });
            res.write(data);
            res.end();
        });
    }
};