const db = require("../models/model");
const fetch = require("node-fetch");

module.exports = {
  checkCocktailTable: (req, res, next) => {
    const query = "SELECT * FROM cocktails WHERE name = $1";
    const values = [req.body.drinkName];
    db.query(query, values)
      .then(response => {
        console.log(response.rows);
        if (response.rows.length > 0) {
          res.locals.cocktail = response.rows[0];
          res.locals.cocktailId = response.rows[0].id;
        }
        return next();
      })
      .catch(err => next(err));
  },
  addToCocktailTable: (req, res, next) => {
    if (!res.locals.cocktailId) {
      const drink = req.body.drinkName;
      let url = `https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${drink}`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          res.locals.cocktail = data.drinks[0];
          let ingredients = '';
          for (let i = 1; i < 16; i +=1) {
            let ingredient = `strIngredient${i}`;
            let measure = `strMeasure${i}`;
            if (data.drinks[0][ingredient]) ingredients += `${data.drinks[0][ingredient]} `;
            if (data.drinks[0][measure]) ingredients += `- ${data.drinks[0][measure]} | `;
          }
          res.locals.ingredients = ingredients;
          const query = "INSERT INTO cocktails(name, ingredients, instructions, image) VALUES($1, $2, $3, $4) RETURNING id";
          const values = [res.locals.cocktail.strDrink, res.locals.ingredients, res.locals.cocktail.strInstructions, res.locals.cocktail.strDrinkThumb];
          db.query(query, values)
            .then(response => {
              res.locals.cocktailId = response.rows[0].id;
              return next();
            })
            .catch(err => next(err));
        })
        .catch(err => console.log(err));
    } else {
      return next();
    }
  }
};
