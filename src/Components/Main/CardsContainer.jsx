import React, { useContext } from 'react'
import CocktailCard from '../Card/CocktailCard'
import { ListContext } from '../../App';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root:{
      height: '100%',
      margin: '0px 260px 0px 260px',
      // border: '1px solid black',
      backgroundColor: '#e27d60',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap'
    }
  }),
);

function CardsContainer() {
  const [cocktailList] = useContext(ListContext);
  const classes = useStyles();

  const cocktailCards = cocktailList.map((cocktail, i) => (
    <CocktailCard key={`drink${i}`} drinkId={cocktail.idDrink} name={cocktail.strDrink} image={cocktail.strDrinkThumb} />
  ))

  return (
    <div className={classes.root}>
      {cocktailCards}
    </div>
  )
}

export default CardsContainer;
