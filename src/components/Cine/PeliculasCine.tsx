import React, { useEffect, useState } from 'react';
import { TitleContainer } from '../Home/TitleContainer';
import "./PeliculasCine.css";
import { Link } from 'react-router-dom';


interface PeliculasCineProps {
  cineId: string | null; 
}

interface PeliculasCine {
  id_pelicula: number;
  titulo: string;
  sinopsis: string;
  pais: string;
  year: string;
  imagen: string;
  imagen_horizontal: string;
  ods: number;
  generos: string;
}

interface RequestOptions {
  method: string;
  redirect?: RequestRedirect | undefined;
}

function PeliculasCine(props: PeliculasCineProps): React.JSX.Element {
  const [peliculasCines, setPeliculasCines] = useState<PeliculasCine[]>([]);
  const ruta = `http://localhost:8081/horarios/estrenos/${props.cineId}`;

  useEffect(() => {
    if (props.cineId) {
      const requestOptions: RequestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch(ruta, requestOptions)
        .then(response => response.json())
        .then((data: PeliculasCine[]) => {
          setPeliculasCines(data);
        })
        .catch(error => {
          console.log('error', error);
        });
    }
  }, [props.cineId, ruta]); 

  return (
    <div className="peliculas-container">
      <div className='title'>
      <TitleContainer title='Peliculas'/>
      </div>
      <div className="peliculas-card">
      {peliculasCines.map((pelicula) => (
        <div key={pelicula.id_pelicula} className="movie-element">
          <Link to={`detalle/${pelicula.id_pelicula}`}>
          <picture className='picture-movie'>
            <img className='image-movie' src={pelicula.imagen} alt={pelicula.titulo} />
          </picture>
          <div className="movie_element-div-title">
            <h2 className="movie_element-title">{pelicula.titulo}</h2>
          </div>
          </Link>
        </div>
       
      ))}
       </div>
    </div>
  );
}

export default PeliculasCine;
