import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import FavoritesHero from './FavoritesHero';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    favorite: {
      height: '200px',
      backgroundColor: 'blue'
    },
  }),
);

const FavoritesContent = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default FavoritesContent;