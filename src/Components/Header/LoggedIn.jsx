import React, { useState, useRef, useEffect } from 'react';
import LoginButton from './LoginButton';
import { TextField, Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import LocalBarIcon from '@material-ui/icons/LocalBar';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'row',
      width: '400px',
      justifyContent: 'space-between',
      marginRight: '40px'
    },
    favorites: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      color: 'white',
      cursor: 'pointer',
      fontSize: '18px',

    }
  }),
);

const LoggedIn = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.favorites}>
        My Favorite Drinks
        <LocalBarIcon />
      </div>
      <div className={classes.favorites}>
        Hi, Diego --img--
      </div>
    </div>  
  );
}

export default LoggedIn;