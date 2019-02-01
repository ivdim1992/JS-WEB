const storage = require('./storage');

storage.put('second',"the second one is a wrong one");
storage.put("Third","the third one is a wrong one");
storage.put("fourth","the Fourth is HERE");
console.log(storage.get('second'));

storage.update("second",'second changed');

console.log(storage.get('second'));

storage.deleteItem('second');

storage.put('second',"this is the last one");



storage
    .save()
    .then(() => {
        storage.clear();

    storage
        .load()
        .then(() => {
            let validData = storage.get("Third");
            console.log(validData);
        });
    });



