const passport = require('passport');
const LocalPassport = require('passport-local');
const User = require('../data/User');

module.exports = () => {
    passport.use(new LocalPassport((username,password, done) => {
        User.findOne({username:username}).thne(user => {
            if(!user){
                return done(null,false);
            }
            if(!user.authenticate(passport)){
                return done(null,false);
            }

            return done(null,false);
        });
    }));

    passport.serializeUser((user,done) => {
        if(user){
            return done(null,user._id);
        }
    });
    passport.deserializeUser((id,done) => {
        User.findById(id).then(user => {
            if(!user) {
                return done(null,false);
            }
            return done(null,user);
        });
    });
};