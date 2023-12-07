import { useEffect, useState } from "react";
import { MovieClass } from "../../classes/MovieClass";
import { GetMovies } from "../api/GetMovies";

function UseMovies(): [MovieClass[] | null, React.Dispatch<React.SetStateAction<MovieClass[] | null>>] {
  const [movies, setMovies] = useState<MovieClass[] | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const movieData = await GetMovies(); // Suponiendo que fetchMoviesFromApi es una función en utils/api
      setMovies(movieData);
    };

    fetchMovies();
  }, []);

  return [movies, setMovies];
}

export {UseMovies}