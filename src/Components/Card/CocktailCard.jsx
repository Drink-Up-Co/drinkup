import React, { useState, useContext, useEffect, useRef } from 'react';
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
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import { UserContext } from '../../App';

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

export default function CocktailCard({ drinkId, name, image }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [info, setInfo] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [clicked, setClicked] = useState(false);
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);
  const [counter, setCounter] = useState('');
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
    if (!clicked) {
      fetch('/favorites/addToMyFav', {
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
        setClicked(true)
      })
    } else {
      fetch('/favorites/deleteFromFav', {
        method: 'DELETE',
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
        setClicked(false);
      })
    }
  }

  const handleUpvoteClick = () => {
    if (!upvoted) {
      fetch('/votes/upvote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "drinkName": name,
          "userId": userId,
        })
      })
      .then(res => res.data()
      .then(data => {
        setUpvoted(true);
        setDownvoted(false);
        setCounter(data.counter);
      }))
    } 
  }

  const handleDownvoteClick = () => {
    if (!downvoted) {
      fetch('/votes/downvote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "drinkName": name,
          "userId": userId,
        })
      })
      .then(res => res.data()
      .then(data => {
        setDownvoted(true);
        setUpvoted(false);
        setCounter(data.counter);
      }))
    }
  }


  return (
    <Card className={classes.root} id={drinkId}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image}/>
      </CardActionArea>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Box flexGrow={1}>
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
        </Box>
          <Box display="flex" flexDirection="row">  
            {counter !== '' && 
              <Box display="flex" flexDirection="column" alignItems="center" border={1} borderRadius={2} borderColor="grey.300" px={1} mr={2}>
                <Typography variant='overline'>
                  Votes
                </Typography>
                <Typography variant='h5'>
                  {counter}
                </Typography>
              </Box>
            }

            <Box display="flex" flexDirection="column">
              <Button
                onClick={handleUpvoteClick}
                variant={upvoted ? 'contained' : 'outlined'}
                color="primary"
                size="small"
                startIcon={<ArrowUpwardOutlinedIcon />}
              >
                Yay
              </Button>
              <Button
                onClick={handleDownvoteClick}
                variant={downvoted ? 'contained' : 'outlined'}
                color="primary"
                size="small"
                startIcon={<ArrowDownwardOutlinedIcon />}
              >
                Nay
              </Button>
            </Box>
          </Box>
      </Box>
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
