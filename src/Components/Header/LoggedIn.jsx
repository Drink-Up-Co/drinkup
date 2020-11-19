import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import LogoutButton from '../../LogoutButton';

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
      textDecoration: 'none'
    },
    img: {
      height: '50px',
      borderRadius: '30px',
      marginLeft: '10px'
    }
  }),
);

const LoggedIn = (props) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { nickname, picture } = user;
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Link className={classes.favorites} to={'/favorites'}>
          My Favorite Drinks
          <LocalBarIcon />
      </Link>
      <div className={classes.favorites}>
        {nickname}
        <img src={picture} className={classes.img}/>
        <LogoutButton />
      </div>
    </div>
  );
}

export default LoggedIn;
