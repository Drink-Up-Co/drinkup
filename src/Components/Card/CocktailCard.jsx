import React, { useState } from 'react';
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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.root} id={drinkId}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image}/>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Ingredients: ...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
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
