import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import FavoriteCard from './FavoriteCard';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      margin: '0px 100px 0px 100px'
    },
    favorite: {
      height: '200px',
      backgroundColor: 'blue'
    },
    cardsWrapper: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    title: {
      color: '#444444'
    }
  }),
);

const FavoritesContent = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>My Favorites</h1>
      <div className={classes.cardsWrapper}>
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
      </div>
    </div>
  );
}

export default FavoritesContent;