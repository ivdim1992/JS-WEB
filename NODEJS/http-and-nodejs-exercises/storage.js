const fs = require('fs');
const dataFile = 'storage.dat';
let data = {};

function validateKey(key) {
    if(!typeof key === String){
        throw new Error('The key must be a string');
    }
}
function checkForExisting(key) {
    if(!data.hasOwnProperty(key)){
        throw new Error('The key does not exist');
    }
}

let put = (key,value) => {
    validateKey(key);

    if(data.hasOwnProperty(key)){
        throw new Error('The key already exist');
    }

     data[key] = value;
};

let get = (key) => {

    validateKey(key);

    if(!data.hasOwnProperty(key)){
        throw new Error('The key does not exist');
    }

    return data[key];
};

let update = (key,value) => {
    validateKey(key);
    checkForExisting(key);

    data[key] = value;
};

let deleteItem = (key) => {
    validateKey(key);
    checkForExisting(key);

    delete data[key];
};
let clear = () => {
    data = {};
};
let save = () => {
    return new Promise((resolve,reject) => {
        let dataAsString = JSON.stringify(data);

        fs.writeFile(dataFile,dataAsString, err => {
            if(err){
                reject(err);
                return
            }
            resolve();
        });
    });
};
let load = () => {

    return new Promise((resolve,reject) => {
        fs.readFile(dataFile,'utf8', (err,dataJSON) => {
            if(err){
                reject(err);
                return
            }
            data = JSON.parse(dataJSON);
            resolve();
        });
    });
     
};
module.exports = {
    put,
    get,
    update,
    deleteItem,
    clear,
    save,
    load
};