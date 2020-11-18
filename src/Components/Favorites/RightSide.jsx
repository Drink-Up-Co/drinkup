import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'green',
      height: 'auto',
      width: '50%'
    },
    info: {
      width: '600px',
      height: '400px',
      border: '1px solid black'
    }
  }),
);

const RightSide = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.info}>
        </div>
      </div>
    </>
  );
}

export default RightSide;