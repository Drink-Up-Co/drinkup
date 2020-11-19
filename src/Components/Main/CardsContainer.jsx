import React, { useState, useContext, useEffect } from 'react';
import CocktailCard from '../Card/CocktailCard';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { CardContext } from '../../App';

const useStyles = makeStyles((theme) =>
  createStyles({
    root:{
      height: '100%',
      margin: '0px 260px 0px 260px',
      backgroundColor: theme.palette.primary.main,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap'
    }
  }),
);

function CardsContainer({ cocktailList }) {
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
