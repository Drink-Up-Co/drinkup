const db = require("../models/model");

module.exports = {
  getVote: (req, res, next) => {
    const query = 'SELECT SUM(vote) FROM voted WHERE cocktails_id = $1';
    const values = [res.locals.cocktailId];
    db.query(query, values)
      .then(response => {
        res.locals.count = response;
        return next();
      })
      .catch(err => next(err));
  },
  checkVotedTable: (req, res, next) => {
    // create a query to check voted table to see if user has voted for a particular drink
    const query = 'SELECT * FROM voted WHERE cocktails_id = $1 AND users_id = $2'
    // require: user id and cocktail id
    const values = [res.locals.cocktailId, req.body.usersId]
    // after running query, check to see if there is any data sent back
    db.query(query, values)
      // if no data is sent back set res.locals.alreadyVoted to false
      .then(response => {
        if(response.rows.length === 0) {
          res.locals.alreadyVoted = false;
        // otherwise set res.locals.alreadyVoted to true
        } else {
          res.locals.alreadyVoted = true;
        }
        return next();
      })
      // add catch
      .catch(err => next(err))
  },
  upVote: (req, res, next) => {
    if (res.locals.alreadyVoted) {
      //update vote column
      const query = 'UPDATE voted SET vote = $3 WHERE cocktails_id = $1 AND users_id = $2 ';
      const values = [res.locals.cocktailId, req.body.usersId, 1];
      db.query(query, values)
        .then(next())
        .catch(err => next(err))
    } else {
      //add new row into vote table
      const query = 'INSERT INTO voted (users_id, cocktails_id, vote) VALUES ($1, $2, $3)'
      const values = [req.body.usersId, res.locals.cocktailId, 1]
      db.query(query, values)
        .then(next())
        .catch(err => next(err))
    }
  },
  downVote: (req, res, next) => {
    if (res.locals.alreadyVoted) {
      //update vote column
      const query = 'UPDATE voted SET vote = $3 WHERE cocktails_id = $1 AND users_id = $2 ';
      const values = [res.locals.cocktailId, req.body.usersId, -1];
      db.query(query, values)
        .then(next())
        .catch(err => next(err))
    } else {
      //add new row into vote table
      const query = 'INSERT INTO voted (users_id, cocktails_id, vote) VALUES ($1, $2, $3)'
      const values = [req.body.usersId, res.locals.cocktailId, -1]
      db.query(query, values)
        .then(next())
        .catch(err => next(err))
    }
  }
};
