import { MovieClass } from "../../classes/MovieClass";
import { MovieInterface } from "../../interfaces/MovieInterface";

async function GetMovies():Promise<MovieClass[]> {
    try {
        const response = await fetch("http://localhost:8081/peliculas");
    
        if (!response.ok) {
          throw new Error(`Error: petición fallida ${response.status}`);
        }
    
        const data: MovieInterface[] = await response.json();
        return data.map((movieData) => new MovieClass(movieData));
      } catch (error) {
        console.error("Error: conversión de datos fallida", error);
        return [];
      }
}

export { GetMovies}