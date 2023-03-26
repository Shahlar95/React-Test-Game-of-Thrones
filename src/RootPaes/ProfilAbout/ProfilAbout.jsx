import React, {useParams,useState,useEffect} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

const ProfilAbout = () => {
  const { id } = useParams();
  const [profil, setProfil] = useState(null);
  useEffect(() => {
    axios
      .get(`https://thronesapi.com/api/v2/Characters/${id}`)
      .then((resp) => setProfil(resp.data));
  }, []);
 console.log(profil)
  return (
    <div>
      <Card>
        <CardMedia component="img" alt="green iguana" image={profil.imageUrl} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {profil.fullName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProfilAbout;
