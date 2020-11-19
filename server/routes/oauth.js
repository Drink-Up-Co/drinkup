const express = require('express');
const router = express.Router();
const db = require("../models/model");
const authController = require("../controllers/authController");

router
  .post('/login', authController.checkUser, authController.saveUser, (req, res) => {
    console.log("OAUTH ROUTE ID: ", res.locals.userId);
    res.status(200).send({ userId: res.locals.userId });
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
