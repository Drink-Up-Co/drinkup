import React, { useState, useRef, useContext } from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import SearchTag from './SearchTag';
import SearchError from './SearchError';
import ingredients from '../Ingredients';
import { CardContext } from '../../App';

const useStyles = makeStyles((theme) =>
  createStyles({
    root:{
      display: 'flex',
      flexDirection: 'column',
      background: 'rgb(250, 250, 250, .92)',
      height: '200px',
      padding: '20px',
      borderRadius: '10px',
      width: '500px',
      marginTop: '-50px'
    },
    btn: {
      marginLeft: '5px'
    },
    tagsWrapper: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '400px',
    },
    searchFormWrapper: {
      display: 'flex',
      flexDirection: 'row',
    },
    title: {
      fontFamily: 'Arial, Helvetica, sans-serif',
      color: '#505052',
      textAlign: 'center'
    }
  }),
);

let ingredientsList = [];

const SearchBox = ({ setCocktailList}) => {
  const classes = useStyles();
  const [input, setInput] = useState('');
  const [tagsArray, setTagsArray] = useState([]);
  const [searchError, setSearchError] = useState(false);
  const [newCard, setNewCard] = useContext(CardContext);
  const textFieldRef = useRef();

  const options = ingredients.map((option) => {
    const firstLetter = option.name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  const handleAddClick = (e) => {
    const ingredient = textFieldRef.current.children[1].firstChild.defaultValue;
    if (ingredient === '') {
      setSearchError(true);
      return;
    }
    setSearchError(false);
    setInput(ingredient);
    if (!ingredientsList.includes(ingredient)) ingredientsList.push(ingredient);
    generateTags(ingredientsList);
  }

  const handleSearchClick = (e) => {
    const myBody = {
      ingredients: ingredientsList
    }
    fetch('/cocktail/search', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myBody)
    })
      .then(res => res.json())
      .then(data => {
        setCocktailList(data)
        ingredientsList = [];
        setTagsArray([]);
        setNewCard(newCard + 1);
      })  
      .catch(err => console.log(err));
      // list of cocktails we get back after fetch request with ingredients list
  }

  const generateTags = () => {
    const tags = ingredientsList.map((ingredient, i) => {
      return (
        <SearchTag deleteTag={deleteTag} name={ingredient} key={`k${i}`} />
      )
    });
    setTagsArray(tags);
  }

  const deleteTag = (ingredient) => {
    return () => {
      for (let i = 0; i < ingredientsList.length; i += 1) {
        if (ingredientsList[i] === ingredient) {
          ingredientsList.splice(i, 1);
        }
      }
      generateTags();
    }
  }

  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.name,
  });

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>Select ingredients you have</h2>
      <div className={classes.searchFormWrapper}>
        <Autocomplete
          filterOptions={filterOptions}
          id="ingredients"
          options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.name}
          getOptionSelected={(option, value) => option.name === value.name}
          style={{ width: 300 }}
          renderInput={
            (params) =>{
              return (<TextField
                {...params}
                label="Ingredients"
                variant="outlined"
                onChange={(e)=>setInput(e.target.value)}
                value={input}
                ref={textFieldRef}
                />)}
          }
        />
        <Button
          variant="contained"
          size="large"
          color="secondary"
          onClick={handleAddClick}
          className={classes.btn}
        >
          ADD
        </Button>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          onClick={handleSearchClick}
          className={classes.btn}
        >
          SEARCH
        </Button>
      </div>
      {searchError ? <SearchError /> : ''}
      <div className={classes.tagsWrapper}>{tagsArray}</div>
    </div>
  );
}

export default SearchBox;
