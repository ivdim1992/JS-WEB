const encryption = require('../util/encryption');
const User = require('../models/User');
const Rent = require('../models/Rent');
const Car = require('../models/Car');

module.exports = {
    registerGet: (req, res) => {
        res.render('user/register');
    },
    registerPost: (req, res) => {
        const userBody = req.body;

        if (!userBody.username || !userBody.password || !userBody.repeatPassword) {
            userBody.error = 'Please fill all fields';
            res.render('user/register', userBody);
            return;
        }

        if (userBody.password !== userBody.repeatPassword) {
            userBody.error = 'Both passwords should match';
            res.render('user/register', userBody);
            return;
        }

        const salt = encryption.generateSalt();
        const hashedPass = encryption.generateHashedPassword(salt, userBody.password);

        User.create({
            username: userBody.username,
            hashedPass: hashedPass,
            firstName: userBody.firstName,
            lastName: userBody.lastName,
            salt: salt,
            roles: ['User']
        }).then(user => {
            req.logIn(user, (err) => {
                if (err) {
                    userBody.err = err;
                    res.render('user/register', userBody);
                }
                res.redirect('/');
            });
        });

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
                userBody.error = 'Invalid username';
                res.render('user/login', userBody);
                return;
            }

            if (!user.authenticate(userBody.password)) {
                userBody.error = 'Invalid password';
                res.render('user/login', userBody);
                return;
            }

            req.logIn(user, err => {
                if (err) {
                    userBody.error = err;
                    res.render('user/login', userBody);
                }
                res.redirect('/');
            });
        });
    },
    myRents: (req, res) => {
        let userId = req.user._id;
        // userId.toString();

        Rent.find({ user: userId })
            .populate('car')
            .then(rentings => {
                let cars = [];
                for(let rent of rentings){
                    rent.car.expiresOn = `In ${rent.days} days.`;
                    cars.push(rent.car);
                }

                res.render('user/rented', {cars});
                
            }).catch(err => {
                console.log(err);
            });
    }
};