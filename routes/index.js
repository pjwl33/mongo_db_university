var SessionHandler = require('./session'),
    ContentHandler = require('./content'),
    ErrorHandler = require('./error').errorHandler;

module.exports = exports = function(app, db) {
  var sessionHandler = new SessionHandler(db);
  var contentHandler = new ContentHandler(db);

  app.use(sessionHandler.isLoggedInMiddleware);

  app.get('/', contentHandler.displayMainPage);

  app.get('/tag/:tag', contentHandler.displayMainPageByTag);

  app.get('/post/:permalink', contentHandler.displayPostByPermalink);
  app.post('/newcomment', contentHandler.handleNewComment);
  app.get('/post_not_found', contentHandler.displayPostNotFound);
}