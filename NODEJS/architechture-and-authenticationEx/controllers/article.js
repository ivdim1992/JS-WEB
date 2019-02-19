const Article = require('../models/Article');

module.exports = {
  articleCreateGet: (req, res) => {
    res.render('article/create');
  },
  articleCreatePost: (req, res) => {
    const { title, content } = req.body;
    const user = req.user;
    const author = req.user._id;

    let article = new Article({
      title,
      content,
      author
    });

    Article.create(article)
      .then(art => {

        user.articles.push(art._id);
        return user.save();
      })
      .then(() => {
        res.redirect('/');
      })
      .catch(err => {
        console.log(err);
      });
  },
  details: (req, res) => {
    const articleId = req.params.articleId;

    Article.findById(articleId)
      .populate('author')
      .then(article => {
        let isAuthor = false;
        if (req.user) {
          isAuthor = req.user.isAuthor(article);
        }

        res.render('article/details', { article, isAuthor });
      })
      .catch(console.error);

  },
  editGet: (req, res) => {
    let articleId = req.params.articleId;

    Article.findById(articleId).populate('author')
      .then((article) => {

        res.render('article/edit', article);
        return;

      }).catch((error) => {
        console.log(error);
      });
  },
  editPost: (req, res) => {

  },
  deleteGet: (req, res) => {
    let articleId = req.params.deleteId;

    Article.findById(articleId).populate('author')
      .then((article) => {
        if (!article) {
          res.status(404);
          res.render('error/not-found')
          return;
        }

        if (req.user.isAuthor(article) || req.user.isInRole('Admin')) {
          Article.findByIdAndRemove(articleId).exec();
          res.redirect('/');
          return;
        } else {
          res.status(401);
          res.render('error/unauthorized');
          return;
        }
      }).catch((error) => {
        console.error(error);
        res.status(404);
        res.render('error/not-found');
        return;
      });
  },
};