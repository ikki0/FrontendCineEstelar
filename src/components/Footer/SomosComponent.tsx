import { TitleContainer } from "../Home/TitleContainer";
import "./SomosComponent.css";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, green, red, yellow } from '@mui/material/colors';

const cardStyle = {
  maxWidth: 250,
  backgroundColor: 'white'
};

const handleLinkedInClick = (link: string) => {
  window.open(link, '_blank');
};

function SomosComponent(): React.JSX.Element {

  return (
    <>
      <header>
        <TitleContainer title='¿Quiénes somos?' />
        <h1 className="titulo">
          ¡Bienvenidos a nuestra comunidad en CineEstelar!
        </h1>
      </header>
      <article className="article">
        <p>
          Somos Alan, Lia, Saray y Sergio, un equipo unido por la pasión por el
          cine y el compromiso con un mundo mejor.
        </p>
        <p>
          Conoce nuestra historia, nuestra visión y el camino que estamos
          trazando juntos hacia un futuro donde el entretenimiento se entrelaza
          con la responsabilidad social. Únete a nosotros en esta aventura donde
          cada fotograma cuenta una historia de cambio y esperanza.
        </p>
      </article>
      <div className="card-container">
        <div className="card">
        <Card sx={cardStyle}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                  A
                </Avatar>
              }
              title="Alan Rojas"
            />
            <CardMedia
              component="img"
              height="194"
              image="/src/assets/images/alan.png"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
              Fundador y creador de Cine Estelar, además de Desarrollador FrontEnd en la empresa.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
            <IconButton aria-label="linkedin" onClick={() => handleLinkedInClick('https://www.linkedin.com/in/alan-rojas-alvarez/')}>
                <img className="imglogo" src="/src/assets/images/linkedin.png" alt="LinkedIn" />
              </IconButton>
            </CardActions>
          </Card>
        </div>
        <div className="card">
        <Card sx={cardStyle}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: yellow[800] }} aria-label="recipe">
                  L
                </Avatar>
              }
              title="Lia Puigmitjà"
            />
            <CardMedia
              component="img"
              height="194"
              image="/src/assets/images/lia.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
              Fundador y creador de Cine Estelar, además de Desarrollador BackEnd en la empresa.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
            <IconButton aria-label="linkedin" onClick={() => handleLinkedInClick('https://www.linkedin.com/in/lipuigmi/')}>
                <img className="imglogo" src="/src/assets/images/linkedin.png" alt="LinkedIn" />
              </IconButton>
            </CardActions>
          </Card>
        </div>
        <div className="card">
        <Card sx={cardStyle}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                  S
                </Avatar>
              }
              title="Saray Magallanes"
            />
            <CardMedia
              component="img"
              height="194"
              image="/src/assets/images/saray.jpeg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
              Fundadora y creadora de Cine Estelar, además de Desarrollador FrontEnd en la empresa.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
            <IconButton aria-label="linkedin" onClick={() => handleLinkedInClick('https://www.linkedin.com/in/saray-magallanes/')}>
                <img className="imglogo" src="/src/assets/images/linkedin.png" alt="LinkedIn" />
              </IconButton>
            </CardActions>
          </Card>
        </div>
        <div className="card">
        <Card sx={cardStyle}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  S
                </Avatar>
              }
              title="Sergio Serrano"
            />
            <CardMedia
              component="img"
              height="194"
              image="/src/assets/images/sergio.jpeg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                FFundador y creador de Cine Estelar, además de Desarrollador BackEnd en la empresa.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
            <IconButton aria-label="linkedin" onClick={() => handleLinkedInClick('https://www.linkedin.com/in/serranosergio22/')}>
                <img className="imglogo" src="/src/assets/images/linkedin.png" alt="LinkedIn" />
              </IconButton>
            </CardActions>
          </Card>
        </div>
      </div>

    </>
  );
}
export { SomosComponent };


