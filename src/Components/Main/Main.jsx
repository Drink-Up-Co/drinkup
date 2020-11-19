import React, { useState, createContext } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import SearchBox from '../Search/SearchBox';
import hero from '../../Images/banner.png';
import CardsContainer from './CardsContainer';
// import Results from '../Content/Results';

export const ListContext = createContext([[], () => {}]);

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
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
    },
    block: {
      height: '400px',
      border: '1px solid black',
      backgroundColor: 'blue'
    }
  }),
);

const Main = (props) => {
  const classes = useStyles();
  const [cocktailList, setCocktailList] = useState([]);

  return (
    <ListContext.Provider value={[cocktailList, setCocktailList]} >
      <div>
        <div className={classes.root}>
          <h1 className={classes.title}>Time To Drink Up</h1>
          <SearchBox setCocktailList={setCocktailList} />
        </div>
          <CardsContainer cocktailList={cocktailList} />
      </div>
    </ListContext.Provider>
  );
}

export default Main;
