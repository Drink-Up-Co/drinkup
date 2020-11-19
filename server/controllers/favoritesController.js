const db = require("../models/model");

module.exports = {
  checkCocktailTable: () => {
    const query = "SELECT * FROM cocktails WHERE name = $1";
    const values = [req.body.strDrink];
    db.query(query, values)
      .then(response => {
        if (response.rows.length > 0) {
          res.locals.cocktail = response.rows[0];
          return next();
        }
        return next();
      })
      .catch(err => next(err));
  },
  addToCocktailTable: () => {
    if (!res.locals.cocktail) {
      const query = "INSERT INTO cocktails(name, instructions, ingredients, imageURL) VALUES($1, $2, $3, $4)";
      const values = [req.body]
    }
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
  addToFavorites: () => {

  },
  deleteFromFavorites: () => {

  }
}
