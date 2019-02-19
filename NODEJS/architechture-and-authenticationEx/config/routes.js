const homeController = require('../controllers/home');
const userController = require('../controllers/user');
const authentication = require('./auth');
const articleController = require('../controllers/article');

module.exports = (app) => {
    app.get('/', homeController.index);

    app.get('/user/register', authentication.isAnonymous, userController.registerGet);
    app.post('/user/register', authentication.isAnonymous, userController.registerPost);
    app.get('/user/login',authentication.isAnonymous, userController.loginGet);
    app.post('/user/login',authentication.isAnonymous, userController.loginPost);
    app.get('/user/logout',authentication.isAuthed, userController.logout);
    
    app.get('/article/create',authentication.isAuthed, articleController.articleCreateGet);
    app.post('/article/create',authentication.isAuthed, articleController.articleCreatePost);

    app.get('/article/details/:articleId', articleController.details);

    app.get('/article/edit', authentication.isAuthed, articleController.editGet);
    app.post('/article/edit/:articleId',articleController.editPost);

    app.get('/article/delete/:deleteId',articleController.deleteGet);



    
    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};

