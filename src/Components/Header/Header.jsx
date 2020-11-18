import React, { useState, useRef, useEffect } from 'react';
import LoginButton from './LoginButton';
import { TextField, Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import LoggedIn from './LoggedIn';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '70px',
      backgroundColor: '#676b70',
      margin: '0px',
      padding: '0px'
    },
    logo: {
      color: 'white',
      marginLeft: '40px',
      fontFamily: 'Arial, Helvetica, sans-serif',
    },
    rightContent: {
      marginRight: '200px'
    }
  }),
);

const Header = (props) => {
  const [loggedIn, setLoggedIn] = useState(true);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1 className={classes.logo}>Drink Up</h1>
      {loggedIn 
        ? <LoggedIn style={{paddingRight: '10px'}} /> 
        : <LoginButton style={{paddingRight: '10px'}} />} 
    </div>
  );
}

export default Header;