const express = require('express');
const router = express.Router();
const db = require("../models/model");
const favoritesController = require("../controllers/favoritesController");
const cocktailController = require("../controllers/cocktailController");

router
  // for testing purposes
  .get('/cocktailTable', (req, res) => {
    const query = "SELECT * FROM cocktails";
    db.query(query)
      .then(response => {
        console.log(response.rows);
        res.send(response.rows);
      })
  })
  // for testing purposes
  .get('/favoritesTable', (req, res) => {
    const query = "SELECT * FROM favorites";
    db.query(query)
      .then(response => {
        console.log(response.rows);
        res.send(response.rows);
      })
  })
  // actual routes
  .post('/addToMyFav', cocktailController.checkCocktailTable, cocktailController.addToCocktailTable, favoritesController.checkFavoritesTable, favoritesController.addToFavorites, (req, res) => {
    res.status(200).send({ favorite: res.locals.favorite })
  })
  .delete('/deleteFromFav', favoritesController.checkFavoritesTable, favoritesController.deleteFromFavorites, (req, res) => {
    res.status(200).send({ favorite: res.locals.favorite })
  })
  .post('/myFavs', favoritesController.checkFavoritesTable, (req, res) => {
    res.status(200).send({ favorite: res.locals.favorites })
  })

module.exports = router;
