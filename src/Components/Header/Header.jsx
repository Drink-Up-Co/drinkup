import React from 'react';
import LoginButton from './LoginButton';
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles, createStyles } from '@material-ui/core/styles';
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
  const { user, isAuthenticated, isLoading } = useAuth0();
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1 className={classes.logo}>Drink Up</h1>
      {isAuthenticated 
        ? <LoggedIn style={{paddingRight: '10px'}} /> 
        : <LoginButton style={{paddingRight: '10px'}} />} 
    </div>
  );
}

export default Header;