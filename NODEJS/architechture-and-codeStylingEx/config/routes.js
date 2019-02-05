const restrictedPages = require('./auth');
const controllers = require('../controllers/index');

module.exports = app => {
    app.get('/', controllers.homeController.index);

    app.get('/user/register', restrictedPages.isAnonymous, restrictedPages.isAnonymous, controllers.userController.registerGet);
    app.post('/user/register', restrictedPages.isAnonymous, controllers.userController.registerPost);
    app.get('/user/login', restrictedPages.isAnonymous, controllers.userController.loginGet);
    app.post('/user/login', restrictedPages.isAnonymous, controllers.userController.loginPost);
    app.post('/user/logout', controllers.userController.logout);
    app.get('/user/rents',restrictedPages.isAuthed,controllers.userController.myRents);

    app.get('/car/all', controllers.carController.allCars);
    app.get('/car/add', restrictedPages.hasRole('Admin'), controllers.carController.addGet);
    app.post('/car/add', restrictedPages.hasRole('Admin'), controllers.carController.addPost);
    app.get('/car/rent/:id', restrictedPages.isAuthed, controllers.carController.rentGet);
    app.post('/car/rent/:id', restrictedPages.isAuthed, controllers.carController.rentPost);
    app.get('/car/edit/:id',restrictedPages.hasRole('Admin'),controllers.carController.editGet);
    app.post('/car/edit/:id',restrictedPages.hasRole('Admin'),controllers.carController.editPost);



    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};