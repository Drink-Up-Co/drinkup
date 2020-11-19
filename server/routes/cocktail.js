const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();

router
  .post('/search', (req,res) => {
    const ingredients = req.body.ingredients;
    console.log('req.body ',req.body);
    console.log('ingredients received in server --> ', ingredients)
    const ingredientsString = ingredients.join();
    let url = `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${ingredientsString}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log("response -->", data.drinks);
        res.send(data.drinks);
      })
      .catch(err => console.log(err))
  })
  .post('/moreInfo', (req, res) => {
    const drink = req.body.drinkId;
    let url = `https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${drink}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log("response -->", data.drinks[0].strInstructions);
        res.send({ instructions: data.drinks[0].strInstructions} );
      })
      .catch(err => console.log(err));
  })
  .post('/ingredients', (req, res) => {
    const drink = req.body.drinkId;
    let url = `https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${drink}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log("response -->", data.drinks);
        let ingredients = '';
        for (let i = 1; i < 16; i +=1) {
          let ingredient = `strIngredient${i}`;
          let measure = `strMeasure${i}`;
          if (data.drinks[0][ingredient]) ingredients += `${data.drinks[0][ingredient]} `;
          if (data.drinks[0][measure]) ingredients += `- ${data.drinks[0][measure]} | `;
        }
        console.log("ingredients -->", ingredients);
        res.send({ ingredients });
      })
      .catch(err => console.log(err));
  })

module.exports = router;
