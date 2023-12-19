import React, { useEffect, useState } from 'react';
import "./SeleccionCine.css";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import PeliculasCine from './PeliculasCine';

interface Cine {
  id_cine: number | string;
  nombre_cine: string;
  ubicacion: string;
  imagen: string;
}

interface RequestOptions {
  method: string;
  redirect?: RequestRedirect | undefined;
}

function SeleccionCine(): React.JSX.Element {
  const [cines, setCines] = useState<Cine[]>([]);
  const [selectedCineId, setSelectedCineId] = useState<string | null>(null);
  const [showPeliculasCine, setShowPeliculasCine] = useState<boolean>(false);

  useEffect(() => {
    const requestOptions: RequestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://localhost:8081/cines", requestOptions)
      .then(response => response.json())
      .then((data: Cine[]) => {
        setCines(data);
      })
      .catch(error => {
        console.log('error', error);
      });

    //guardar cineID en localstorage
    const cineIdLocalStorage = localStorage.getItem('selectedCineId');
      if (cineIdLocalStorage) {
        setSelectedCineId(cineIdLocalStorage);
        setShowPeliculasCine(false); // Activar el estado para mostrar PeliculasCine
      }
    }, []);

    const handleClick = (id_cine: string) => {
      setSelectedCineId(id_cine);
      localStorage.setItem('selectedCineId', id_cine);
      setShowPeliculasCine(true); // Activar el estado para mostrar PeliculasCine
    };

  return (
    <>
      <div className="cines-container">
        {cines.map((cine) => (
          <Card className='card'
            key={cine.id_cine}
            sx={{
              maxWidth: 345,
              backgroundColor: selectedCineId === cine.id_cine ? "#ffc32c96" : "#ffc22c",
              color: 'white'
            }}
            onClick={() => handleClick(cine.id_cine as string)}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={cine.imagen}
                alt={cine.nombre_cine}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {cine.nombre_cine}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {cine.ubicacion}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
      <div>
      {showPeliculasCine && selectedCineId && (
            <div className="movies-container">
              <PeliculasCine cineId={selectedCineId} />
            </div>
          )}
      </div>
    </>
  );
}

export { SeleccionCine };
