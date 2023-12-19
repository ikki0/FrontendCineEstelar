import React, { useEffect, useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { SpinnerCharge } from '../SpinnerCharge/SpinnerCharge';
import { useNavigate } from 'react-router-dom';

import "./FilterCinemas.css";
// el local storage de peliculaId es: peliculaId

interface Cine {
  idDia: string
  idHora: string
  idHorario: number;
  peliculaIdPelicula: number;
  salaCineIdCine: number;
  salaIdSala: number;
}

interface CineFiltrados {
  id_cine: "number"
  imagen: "string"
  nombre_cine: "string"
  ubicacion: "string"
}

function FilterCinemasComponent(): React.JSX.Element {
  const [cines, setCines] = useState<Cine[]>([]);
  const [selectedCineId, setSelectedCineId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  let [uniqueCines, setUniqueCines] = useState<Cine[]>([]);
  const [cinesFiltrados, setCinesFiltrados] = useState<CineFiltrados[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const peliculaId = window.localStorage.getItem('peliculaId') || 'no hay peliculaId';

    fetch(`http://localhost:8081/horarios/estrenos/0/${peliculaId}`)
      .then((response) => response.json())
      .then((data) => {
        const objectCine = data;
        setCines(objectCine);
        // Filtrar cines unicos por salaCineIdCine
        let uniqueCines = objectCine.reduce((acc, current) => {
          const x = acc.find(item => item.salaCineIdCine === current.salaCineIdCine);
          if (!x) {
            return acc.concat([current]);
          } else {
            return acc;
          }
        }, []);
        setUniqueCines(uniqueCines);

        // Hacer una petición fetch para cada objeto en uniqueCines
        const fetchPromises = uniqueCines.map((cine) =>
          fetch(`http://localhost:8081/cines/${cine.salaCineIdCine}`)
            .then((response) => {
              if (!response.ok) {
                throw new Error(`Error al obtener los detalles del cine: ${response.statusText}`);
              }
              return response.json();
            })
        );

        return Promise.all(fetchPromises);
      }) 
      .then((data) => {
        const objectCine = data;
        console.log('mis cines son: ' , objectCine)
        setCinesFiltrados(objectCine);
        setIsLoading(false);

      })
      .catch((error) => {
        console.error("error durante la petición get /horarios/estrenos/0/peliculaId:", error);
        setIsLoading(false);
      });

    //guardar cineID en localstorage
    const cineIdLocalStorage = localStorage.getItem('selectedCineId');
    if (cineIdLocalStorage) {
      setSelectedCineId(cineIdLocalStorage);
    }
  }, []);

  const handleClick = (id_cine: string) => {
    setSelectedCineId(id_cine);
    localStorage.setItem('selectedCineId', id_cine);
    navigate('/seleccionar-horario');
  };

  if (isLoading) {
    return (
      <SpinnerCharge />
    );
  }

  return (
    <>
      <div className="cines-container">
        {cinesFiltrados.map((cine, index) => (
          <Card className='card'
            key={index}
            sx={{
              maxWidth: 345,
              backgroundColor: selectedCineId === cine.id_cine.toString() ? "#ffc32c96" : "#ffc22c",
              color: 'white'
            }}
            onClick={() => handleClick(cine.id_cine.toString())}
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
    </>
  );
}

export { FilterCinemasComponent };
