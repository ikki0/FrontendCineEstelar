import { useEffect, useState } from "react";
import { MovieInterface } from "../../interfaces/MovieInterface";
import { MovieClass } from "../../classes/MovieClass";
import { MainContainer } from "../../components/Home/MainContainer";
import { SpinnerCharge } from "../../components/SpinnerCharge/SpinnerCharge";
import './PeliculasComponent.css';

function PeliculasComponent(): React.JSX.Element {
  const [movies, setMovies] = useState<MovieClass[]>([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    fetch("http://localhost:8081/peliculas")
      .then((response) => response.json())
      .then((data: MovieInterface[]) => {
        const movieObjects = data.map((movieData) => new MovieClass(movieData));
        setMovies(movieObjects);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("error durante la petición get /peliculas:", error);
        setIsLoading(false); 
      });
  }, []);

  if (isLoading) {
    return (
      <SpinnerCharge />
    );
  }

  return (
    <div className="main">
      <div className="container-movie">
        {movies.length ? (
          
          <MainContainer title='Todas las películas' moviesObject={movies} />
        ) : (
          <p>No hay Películas.</p>
        )}
      </div>
    </div>
  );
}

export { PeliculasComponent };
