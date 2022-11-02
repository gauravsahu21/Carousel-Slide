import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './card.css'

const CardDis=(props)=>{
    
    
    return(
        <>
        <Card sx={{ maxWidth:500 }} className="Tiles">
      <CardMedia
        component="img"
       
        height="150"
        width="80"
        image={props.x.img}
       
      />
      {/* <Typography>{props.x.no}</Typography> */}
    
     
    </Card>
        </>
    )
}
export default CardDis;