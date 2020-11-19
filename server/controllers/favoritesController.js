const db = require("../models/model");

module.exports = {
  checkFavoritesTable: (req, res, next) => {
    const query = "SELECT * FROM favorites WHERE users_id = $1";
    const values = [req.body.userId];
    db.query(query, values)
      .then(response => {
        if (response.rows.length > 0) {
          res.locals.alreadyFavorite = true;
          res.locals.favorites = response.rows;
        }
        return next();
      })
      .catch(err => next(err));
  },
  addToFavorites: (req, res, next) => {
    if (!res.locals.alreadyFavorite) {
      const query = "INSERT INTO favorites(cocktails_id, users_id) VALUES($1, $2)";
      const values = [res.locals.cocktailId, req.body.userId];
      db.query(query, values)
        .then(response => {
          res.locals.favorite = true;
          return next();
        })
        .catch(err => next(err));
    } else {
      return next();
    }
  },
  deleteFromFavorites: (req, res, next) => {
    if (res.locals.alreadyFavorite) {
      const query = "DELETE FROM favorites WHERE cocktails_id = $1 AND users_id = $2";
      const values = [res.locals.cocktailId, req.body.userId];
      db.query(query, values)
        .then(response => {
          res.locals.favorite = false;
          return next();
        })
        .catch(err => next(err));
    } else {
      return next();
    }
  }
}
