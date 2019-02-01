const fs = require('fs');
let favIcon = '/favicon(1).ico';

module.exports = (req,res) => {
    if(req.path === favIcon){
        fs.readFile(favIcon,(err,data) => {
            if(err){
                console.log(err);
                return;
            }
            res.writeHead(200,{
                'Content-type': 'image/x-icon'
            });
            res.write(data);
            res.end();
        });
    }else {
        return true;
    }
};