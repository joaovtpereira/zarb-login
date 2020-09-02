import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

interface PageHeaderProps {
  title: string;
  description: string;
  image: string;
}

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
  },
  height: {
    height: 132,
  }
});

const CardProduct: React.FC<PageHeaderProps> = ({title, description, image}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />

        <CardContent className={classes.height}>
          <Typography 
            gutterBottom 
            variant="h5" 
            component="h2" 
            className={classes.color}
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.color}
          >
           {description}
          </Typography>
        </CardContent>

      </CardActionArea>
    </Card>
  );
}

export default CardProduct;