import React, { useContext } from 'react'
import CocktailCard from './CocktailCard'
import { ListContext } from './App';

function CardsContainer() {
  const [cocktailList] = useContext(ListContext);

  cocktailList.map((cocktail) => (
    <CocktailCard key={cocktail.idDrink} name={cocktail.strDrink} image={cocktail.strDrinkThumb} />
  ))

  return (
    <div>
      <CocktailCard />
    </div>
  )
}

export default CardsContainer;