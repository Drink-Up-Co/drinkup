const express = require('express');
const router = express.Router();
const db = require("../models/model");
const favoritesController = require("../controllers/favoritesController");

router
  .get('/cocktailTable', (req, res) => {
    const query = "SELECT * FROM cocktails";
    db.query(query)
      .then(response => {
        console.log(response.rows);
        res.send(response.rows);
      })
  })
  .get('/favoritesTable', (req, res) => {
    const query = "SELECT * FROM favorites";
    db.query(query)
      .then(response => {
        console.log(response.rows);
        res.send(response.rows);
      })
  })
  .post('/addToMyFav', favoritesController.checkCocktailTable, favoritesController.addToCocktailTable, favoritesController.checkFavoritesTable, favoritesController.addToFavorites, (req, res) => {
    res.status(200).send({ favorite: res.locals.favorite })
  })
  .delete('/deleteFromFav', favoritesController.checkFavoritesTable, favoritesController.deleteFromFavorites, (req, res) => {
    res.status(200).send({ favorite: res.locals.favorite })
  })
  .post('/test', favoritesController.checkCocktailTable, favoritesController.addToCocktailTable, (req, res) => {
    res.status(200).send({ favorite: res.locals.favorite })
  })

module.exports = router;
