import React, { useState, useRef, useEffect } from 'react';
import LoginButton from './LoginButton';
import { TextField, Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      height: '70px',
      backgroundColor: '#676b70',
      margin: '0px',
      padding: '0px'
    },
    logo: {
      color: 'white',
      marginLeft: '10px',
      paddingLeft: '10px',
      fontFamily: 'Arial, Helvetica, sans-serif',
    }
  }),
);

const Header = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1 className={classes.logo}>Drink Up</h1> 
      <LoginButton />   
    </div>
  );
}

export default Header;