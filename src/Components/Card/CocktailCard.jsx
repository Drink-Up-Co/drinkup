import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import {UserContext} from '../../App';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 800,
    maxWidth: 800,
    padding: 16,
    margin: 8,
    // flexGrow: 1
  },
  media: {
    height: 360,
  },
  expand: {
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
}));

export default function CocktailCard({ drinkId, name, image}) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [info, setInfo] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [clicked, setClicked] = useState(false);
  const [userId] = useContext(UserContext);

  const handleExpandClick = () => {
    if (info === '') {
      fetch('/cocktail/moreInfo', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ drinkId })
      })
        .then(res => res.json())
        .then(data => {
          console.log("More Info Data: ", data);
          setInfo(data.instructions);
        })
        .catch(err => console.log(err));
    }
    setExpanded(!expanded);
  };

  const handleGetIngredients = () => {
    if (ingredients === '') {
      fetch('/cocktail/ingredients', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ drinkId })
      })
        .then(res => res.json())
        .then(data => {
          console.log("More Info Data: ", data);
          setIngredients(data.ingredients);
        })
        .catch(err => console.log(err));
    }
  }

  const handleFavoritesClick = () => {
    // Send userId and drink name to server
    fetch('/favorites', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "drinkName": name,
        "userId": userId
      })
    })
    .then(res => res.json())
    .then(data => {
      data.favorite ? setClicked(true) : setClicked(false);
    })
  }

  
  // Upon rendering of card, check if userID (foreign_key_users) is in the Favorites table with cocktail_id (foreign_key_cocktails)
    // if found, render red heart
    // if not found, render grey heart
  
  // When clicked
    // toggle colour of heart
    // update state of favorite
        // add user_id to favorites table
        // or
        // remove user_id from favorites table


  return (
    <Card className={classes.root} id={drinkId}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image}/>
      </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Ingredients: {ingredients}
            { (ingredients === '') &&
               <button onClick={handleGetIngredients}>...</button>
            }
          </Typography>
        </CardContent>
      <CardActions>
        <IconButton aria-label='add to favorites' onClick={handleFavoritesClick}>
          <FavoriteIcon color={clicked ? 'secondary' : 'disabled'}
          />
        </IconButton>
        <Button
          size='small'
          color='primary'
          className={clsx(classes.expand)}
          onClick={handleExpandClick}
          aria-label='show more'
        >
          More Info
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {info}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
