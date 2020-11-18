import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root:{
      height: '400px',
      margin: '0px 250px 0px 250px',
      border: '1px solid black',
      backgroundColor: 'blue'
    }
  }),
);


const Results = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      Hi
    </div>
  )
}

export default Results;