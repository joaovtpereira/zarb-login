import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: '#8257E5',
  },
  media: {
    height: 140,
  },
  color: {
    color: '#FFFFFF',
  }
});

function CardProduct() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://scstylecaster.files.wordpress.com/2018/11/old-school-products.jpg"
          title="Contemplative Reptile"
        />

        <CardContent>
          <Typography 
            gutterBottom 
            variant="h5" 
            component="h2" 
            className={classes.color}
          >
            Lizard
          </Typography>

          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.color}
          >
           Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>

      </CardActionArea>
    </Card>
  );
}

export default CardProduct;