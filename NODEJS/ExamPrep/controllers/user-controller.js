const encryption = require('../util/encryption');
const User = require('../models/User');


module.exports = {
    registerGet: (req, res) => {
        res.render('user/register');
    },
    registerPost: async (req, res) => {
        const reqUser = req.body;
       
        const salt = encryption.generateSalt();
        const hashedPass =
            encryption.generateHashedPassword(salt, reqUser.password);
        try {
            const user = await User.create({
                username: reqUser.username,
                hashedPass,
                salt,
                firstName: reqUser.firstName,
                lastName: reqUser.lastName,
                roles: []
            });
            req.logIn(user, (err, user) => {
                if (err) {
                    res.locals.globalError = err;
                    res.render('user/register', user);
                } else {
                    res.redirect('/');
                }
            });
        } catch (e) {
            console.log(e);
            reqUser.globalError = 'Duplicate username'
            res.render('user/register',reqUser);
            return
        }

    },
    logout: (req, res) => {
        req.logout();
        res.redirect('/');
    },
    loginGet: (req, res) => {
        res.render('user/login');
    },
    loginPost: (req, res) => {
        let userBody = req.body;

        User.findOne({ username: userBody.username }).then(user => {

            if (!user) {
                userBody.globalError = 'Invalid username';
                res.render('user/login', userBody);
                return;
            }

            if (!user.authenticate(userBody.password)) {
                userBody.globalError = 'Invalid password';
                res.render('user/login', userBody);
                return;
            }

            req.logIn(user, err => {
                if (err) {
                    userBody.globalError = err;
                    res.render('user/login', userBody);
                }
                res.redirect('/');
            });
        });
    },
};