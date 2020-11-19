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
      backgroundColor: '#2e050d',
      margin: '0px',
      padding: '0px',
      boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)'
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
  const { user, isAuthenticated } = useAuth0();
  const classes = useStyles();
  console.log(user);
  if (isAuthenticated) {
    fetch('/oauth/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => console.log("User saved in database - client side"))
      .catch(err => console.log(err));
  }

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
