const mongoose = require('mongoose');
const encryption = require('../utilities/encryption');


let userSchema = new mongoose.Schema({
    username: { type: mongoose.SchemaTypes.String, required: true, unique: true },
    firstName: { type: mongoose.SchemaTypes.String, required: true },
    lastName: { type: mongoose.SchemaTypes.String, required: true },
    salt: { type: mongoose.SchemaTypes.String },
    hashedPass: { type: mongoose.SchemaTypes.String },
    roles: [String]
});

userSchema.method({
    authenticate: function(password) {
        return encryption.generateHashedPassword(this.salt,password) === this.hashedPass;
    }
});

let User = mongoose.model('User',userSchema);
module.exports = User;

module.exports.seedAdminUser = () => {
    User.find({}).then((users) => {
        if(users.length > 0){
            return;
        }

        let salt = encryption.generateSalt();
        let hashedPass = encryption.generateHashedPassword(salt, '123456');
      
        User.create({
            username: 'Admin',
            firstName: 'Admin',
            lastName: 'Admin',
            salt: salt,
            hashedPass: hashedPass,
            roles: ['Admin']
        });
    });
};