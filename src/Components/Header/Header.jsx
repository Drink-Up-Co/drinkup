import React from 'react';
import LoginButton from './LoginButton';
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import LoggedIn from './LoggedIn';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

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
      textDecoration: 'none'
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
      <Link className={classes.logo} to={'/'}>
        <h1>Drink Up</h1>
      </Link>
      {isAuthenticated 
        ? <LoggedIn style={{paddingRight: '10px'}} /> 
        : <LoginButton style={{paddingRight: '10px'}} />} 
    </div>
  );
}

export default Header;