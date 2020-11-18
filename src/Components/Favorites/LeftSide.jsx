import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: 'gray',
      height: 'auto',
      width: '50%',
      padding: '20px 0px 0px 50px'
    },
    title: {

    },
    card: {
      width: '600px',
      height: '200px',
      border: '1px solid black'
    }
  }),
);

const LeftSide = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>My Favorites</h1>
      <div className={classes.card}>Card 1</div>
      <div className={classes.card}>Card 2</div>
      <div className={classes.card}>Card 3</div>
    </div>
  );
}

export default LeftSide;