const Car = require('../models/Car');
const Rent = require('../models/Rent');

module.exports = {
    addGet: (req, res) => {
        res.render('car/add');
    },
    addPost: (req, res) => {
        const carBody = req.body;
        carBody.pricePerDay = Number(carBody.pricePerDay);

        if (!carBody.imageUrl || !carBody.model || !carBody.pricePerDay) {
            carBody.error = 'Please fill all fields!';
            res.render('car/add', carBody);
            return;
        }

        Car.create(carBody)
            .then(() => {
                res.redirect('/');
            })
            .catch(err => {
                console.log(err);
            });
    },
    allCars: (req, res) => {
        Car.find({ isRented: false })
            .then(cars => {
                res.render('car/all', { cars });
            })
            .catch(err => {
                console.log(err);
            });
    },
    rentGet: (req, res) => {
        const carId = req.params.id;
        Car.findById(carId)
            .then((car) => {
                res.render('car/rent', car);
            })
            .catch(err => {
                console.log(err);
            });
    },
    rentPost: (req, res) => {
        const car = req.params.id;
        const user = req.user._id;
        const days = Number(req.body.days);

        Rent.create({ days, user, car })
            .then(() => {
                Car.findById(car)
                    .then((c) => {
                        c.isRented = true;
                        c.save();
                        req.user.rentedCars.push(c._id);
                        req.user.save();
                    })
                    .then(() => {
                        res.redirect('/car/all');
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }).catch(err => {
                console.log(err);
            });
    },
    editGet: (req, res) => {
        const carId = req.params.id;

        Car.findById(carId)
            .then(car => {
                res.render('car/edit', car);
            }).catch(err => {
                console.log(err);
            });
    },
    editPost: (req, res) => {
        const carId = req.params.id;
        const {model,imageUrl,pricePerDay} = req.body;

        Car.findById(carId)
            .then(car => {
                car.model = model;
                car.imageUrl = imageUrl;
                car.pricePerDay = pricePerDay;

               return car.save();
            })
            .then(() => {
                res.redirect('/car/all');
            })
            .catch(err => {
                console.log(err);
            });

    }
};