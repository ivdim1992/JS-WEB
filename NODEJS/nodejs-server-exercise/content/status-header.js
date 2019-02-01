const fs = require('fs');


module.exports = (req,res) => {
    let statusHeader = req.headers['statusheader'];
    if(statusHeader && statusHeader === 'Full'){
        fs.readFile('./content/views/status.html', 'utf8', (err,data) => {
            if(err){
                console.log(err);
                return;
            }

            let totalImages = database.getAll.length;
             data = data.replace('{{content}}',`<h1>Total Images - ${totalImages}</h1>`);

             res.writeHead(200, {
                 'Content-type':'text/html'
             });
             res.write(data);
             res.end();
        });
    }else {
        return true;
    }
};