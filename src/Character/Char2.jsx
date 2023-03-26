import React from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';
import "./Char2.css";



function Char2({item}) {
 

  return (
    <div className = "char-div">
      
         <Card className="card-box">
          <CardMedia
          className="card-img"
            component="img"
            alt="green iguana"
            height="140"
            image={item.imageUrl}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.fullName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {item.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"><Link to={`/profil/${item.id}`}><div className='char-btn'>Learn More</div></Link></Button>
          </CardActions>
        </Card>
    </div>
  )
}

export default Char2