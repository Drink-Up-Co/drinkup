const path = require('path');
const express = require('express');
const fetch = require('node-fetch');

// Require in your controllers:
const controller = require('./controllers/controllers.js');
// require in to parse req.body
// const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { response } = require('express');

// create express app instance
const server = express();
const PORT = 3000;

// parses incoming data in request body
server.use(express.json());

server.use(cookieParser());

//urlencoded is for POST and PUT requests
server.use(express.urlencoded({ extended: true }));
// serve static files
server.use(express.static(path.resolve(__dirname, '../index.html')));

// GET/POST/DELETE route handlers:

console.log('server.js running');
server.post(
  '/oauth',
  (req, res, next) => {
    console.log('hitting /test endpoint');
    return next();
  },
  controller.test,
  (req, res) => {
    res.sendStatus(200);
  }
);
// server.post('/oauth');
server.post('/cocktail', (req, res) => {
  const ingredients = req.body.ingredients;
  console.log('req.body ',req.body);
  console.log('ingredients received in server --> ', ingredients)
  const ingredientsString = ingredients.join(); 
  let url = `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${ ingredientsString }`
  console.log(url)

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log("response -->", data.drinks);
      res.send(data.drinks);
    })
    .catch(err => console.log(err))
});
server.get('/upvote');
server.get('/favorites');

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
