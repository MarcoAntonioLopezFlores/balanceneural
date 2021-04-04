import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
//import { Button, CardActions } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
      height:"95%",
      width:"90%",
      margin:"5%",
      /*'&:hover':{
        transform: 'scale(1.05)'
      }*/
    },
    media: {
      width:"100%",
      height:200
    },
  });

export default function CardService(props) {
  const classes = useStyles();

  return (
    <Card elevation={5} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
          {props.title}
          </Typography>
          <Typography gutterBottom variant="inherit" component="strong">
          {props.duracion} • {props.costo}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.content} 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}