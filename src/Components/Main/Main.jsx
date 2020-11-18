import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import SearchBox from '../Search/SearchBox';
import hero from '../../Images/banner.png';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      // justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      margin: '0px',
      backgroundImage: `url(${hero})`,
      backgroundSize: 'cover',
      height: '800px'  
    },
    title: {
      fontSize: '90px',
      color: 'white',
      fontFamily: 'Arial, Helvetica, sans-serif',
      marginBottom: '400px',
      paddingRight: '550px'
    }
  }),
);

const Main = (props) => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <h1 className={classes.title}>It's Happy Hour</h1>
        <SearchBox />
      </div>
  );
}

export default Main;