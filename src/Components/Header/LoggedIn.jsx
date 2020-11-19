import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from '@material-ui/core/styles';
import { Menu, MenuItem } from '@material-ui/core';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) =>
  ({
    container: {
      display: 'flex',
      flexDirection: 'row',
      minWidth: '400px',
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
      textDecoration: 'none',
    },
    img: {
      height: '50px',
      borderRadius: '30px',
      marginLeft: '10px'
    }
  }),
);


const LoggedIn = (props) => {
  const { user } = useAuth0();
  const { logout } = useAuth0();
  const { nickname, picture } = user;
  const classes = useStyles();
  
  const logoutUser = (e) => {
    logout({ returnTo: window.location.origin })
    console.log('logout');
  }
  
  
  const DropDownMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <>
        <p
          className={classes.favorites}
          onClick={handleClick}
        >
          {nickname}
        </p>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={anchorEl ? true: false }
          onClose={handleClose}
        >
          <MenuItem onClick={logoutUser}>Logout</MenuItem>
        </Menu>
      </>
    );
  }

  return (
    <div className={classes.container}>
      <Link className={classes.favorites} to={'/favorites'}>
        My Favorite Drinks
        <LocalBarIcon />
      </Link>
      <DropDownMenu />
      <img src={picture} className={classes.img}/>
      </div>
  );
}

export default LoggedIn;
