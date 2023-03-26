import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import "./ProfilAbout.css";

const ProfilAbout = () => {
  const { id } = useParams();
  const [profil, setProfil] = useState(null);

  useEffect(() => {
    axios
      .get(`https://thronesapi.com/api/v2/Characters/${id}`)
      .then((resp) => setProfil(resp.data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="profil-div">
      {profil && (
        <Card className="profil-card">
          <CardMedia
            className="profile-img"
            component="img"
            alt={profil.fullName}
            image={profil.imageUrl}
          />
          <CardContent>
            <Typography className="profil-name" component="div"></Typography>
            <Typography variant="body2" color="text.secondary">
              <h2>Firstname: {profil.firstName}</h2>
              <h2>Lastname:{profil.lastName}</h2>
              <p>Role: {profil.title}</p>
              <p>Family: {profil.family}</p>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
};

export default ProfilAbout;
