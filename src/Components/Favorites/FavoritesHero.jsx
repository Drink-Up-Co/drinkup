import React from "react";
import favorites from '../../Images/favorites.png';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundImage: `url(${favorites})`,
      height: '600px'
    },
  }),
);

const FavoritesHero = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    </div>
  );
}

export default FavoritesHero;
