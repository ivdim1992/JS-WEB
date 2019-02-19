const controllers = require('../controllers/index');
const restrictedPages = require('./auth');

module.exports = app => {
    //HOME
    app.get('/', controllers.homeController.index);
    // USER
    app.get('/users/register', restrictedPages.isAnonymous, controllers.userController.registerGet);
    app.post('/users/register', restrictedPages.isAnonymous, controllers.userController.registerPost);
    app.post('/users/logout', restrictedPages.isAuthed, controllers.userController.logout);
    app.get('/users/login', restrictedPages.isAnonymous, controllers.userController.loginGet);
    app.post('/users/login', restrictedPages.isAnonymous, controllers.userController.loginPost);
    //THREADS

    app.post('/threads/find', restrictedPages.isAuthed, controllers.threadController.findThread);
    app.get('/thread/:username', restrictedPages.isAuthed, controllers.threadController.getMessages);
    app.post('/thread/:username', restrictedPages.isAuthed, controllers.threadController.sendMessage);

    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};