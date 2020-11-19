const express = require('express');
const router = express.Router();
const db = require("../models/model");
const authController = require("../controllers/authController");

router
  .post('/login', authController.checkUser, authController.saveUser, (req, res) => {
    res.sendStatus(200);
  })
  .get('/', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query)
      .then(response => {
        console.log(response.rows);
        res.send(response.rows);
      })
  })

module.exports = router;
