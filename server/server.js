const path = require('path');
const express = require('express');

// Require in your controllers:
const controller = require('./controllers/controllers.js');
// require in to parse req.body
// const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { response } = require('express');

// create express app instance
const server = express();
const PORT = 3000;

const cocktailRouter = require('./routes/cocktail');
const oauthRouter = require('./routes/oauth');
const favoritesRouter = require('./routes/favorites');

// parses incoming data in request body
server.use(express.json());

server.use(cookieParser());

//urlencoded is for POST and PUT requests
server.use(express.urlencoded({ extended: true }));
// serve static files
server.use(express.static(path.resolve(__dirname, '../index.html')));

// GET/POST/DELETE route handlers:

server.use('/oauth', oauthRouter);
server.use('/cocktail', cocktailRouter);
server.use('/favorites', favoritesRouter);
server.get('/upvote');

// catch all route handler must be at the end
server.use('*', (req, res) => res.sendStatus(404));

// Global Error Handler
server.use(function (err, req, res, next) {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, { message: { err: err } });
  console.log('error Object', errorObj.log);

  res.status(errorObj.status).send(JSON.stringify(errorObj.message));
});

// start server
server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
