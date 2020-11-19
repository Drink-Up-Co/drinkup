const db = require("../models/model");

module.exports = {
  checkCocktailTable: () => {
    const query = "SELECT name FROM cocktails WHERE name = $1";
    const values = [req.body.strDrink];
    db.query(query, values)
      .then(response => {
        if (response.rows.length > 0) {
          res.locals.cocktailId = response.rows[0].id;
          return next();
        }
        return next();
      })
      .catch(err => next(err));
  },
  checkFavoritesTable: () => {
    const query = "SELECT * FROM favorites";
    const values = []
    db.query(query)
      .then(response => {
        console.log(response.rows);

        return next();
      })
      .catch(err => next(err));
  },
  addToCocktailTable: () => {

  },
  addToFavorites: () => {

  },
  deleteFromFavorites: () => {

  }
}
