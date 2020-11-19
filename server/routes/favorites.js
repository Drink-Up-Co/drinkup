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
  .post('/addToMyFav', (req, res) => {
    res.sendStatus(200);
  })

module.exports = router;
