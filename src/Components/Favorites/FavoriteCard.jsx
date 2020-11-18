import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';

export default function MediaCard() {

  const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 400,
      maxWidth: 400,
      margin: '10px'
    },
    media: {
      height: 140,
    },
    heart: {
      color: 'red',
    },
    expand: {
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
  }));

  const heart = useRef();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [heartColor, setHeartColor] = useState('red');
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const removeFavorite = (e) => {
    setHeartColor('green');
    console.log(heartColor);
  }

  useEffect(()=>{

  },[heartColor])



  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            Sake Bomb
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Description of what a Sake Bomb is ...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton 
          aria-label='add to favorites'
          className={classes.heart}
          onClick={removeFavorite}
          ref={heart}
        >
          <HighlightOffIcon />
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
            The sake bomb or sake bomber is a beer cocktail made by pouring sake
            into a shot glass and dropping it into a glass of beer. Sometimes
            two chopsticks are placed parallel on top of the glass of beer, and
            the shot glass is placed on top of them.
          </Typography>
          <Typography paragraph>
            1. Fill a Collins glass with the beer. <br></br> 2. Pour the sake
            into a shot glass. Place 2 chopsticks on top of the glass and
            balance the shot glass on the chopsticks. <br></br> 3. While doing
            the "sake chant" the guest beats on table until shot glass falls
            into the beer glass.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}