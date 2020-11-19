const express = require('express');
const router = express.Router();
const voteController = require("../controllers/voteController");
const cocktailController = require("../controllers/cocktailController");


router
  .post('/getVote', cocktailController.checkCocktailTable, cocktailController.addToCocktailTable, voteController.getVote, (req, res) => {
    res.status(200).send({ count: res.locals.count });
  })
  .post('/upVote', cocktailController.checkCocktailTable, cocktailController.addToCocktailTable, voteController.checkVotedTable, voteController.upVote, voteController.getVote, (req, res) => {
    res.status(200).send({ count: res.locals.count });
  })
  .post('/downVote', cocktailController.checkCocktailTable, cocktailController.addToCocktailTable, voteController.checkVotedTable, voteController.downVote, voteController.getVote, (req, res) => {
    res.status(200).send({ count: res.locals.count });
  })

module.exports = router;
