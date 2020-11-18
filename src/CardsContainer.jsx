import React, { useContext } from 'react'
import Cards from './Cards'
import { ListContext } from './App';

function CardsContainer() {
  const [cocktailList] = useContext(ListContext);

  cocktailList.map((cocktail) => (
    <Card  key={cocktail.idDrink} name={cocktail.strDrink} image={cocktail.strDrinkThumb} />
  ))

  return (
    <div>
      <Cards />
    </div>
  )
}

export default CardsContainer;