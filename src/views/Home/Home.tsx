import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header";
import { MovieInterface } from "../../interfaces/MovieInterface";
import { ImageDetailInterface } from "../../interfaces/ImageDetailInterface";
import { MovieClass } from "../../classes/MovieClass";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./Home.css";
import './Home.css'

function Home(): React.JSX.Element {
  const [movies, setMovies] = useState<MovieClass[] | null>(null);
  const [imageDetails, setImageDetails] = useState<ImageDetailInterface[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Es necesario utilizar useEffect para realizar cualquier petición a una API para evitar peticiones infinitas
  useEffect(() => {
    // Realizar la petición a la API
    fetch("http://localhost:8081/peliculas")
      .then((response) => response.json())
      .then((data: MovieInterface[]) => {
        // Convertir cada objeto JSON en una instancia de la clase Photo
        console.log("data: ", data);
        const movieObjects = data.map((movieData) => new MovieClass(movieData));
        setMovies(movieObjects);
        console.log("moviesObject: ", movieObjects);

        // Extraer las imageDetails de cada objeto y agregarlas al array 'imageDetails'
        const filterImageDetails: ImageDetailInterface[] = movieObjects.map(
          (movie) => {
            return {
              original: movie.getUrl(),
              title: movie.getTitle(),
            };
          }
        );
        setImageDetails(filterImageDetails);
      })
      .catch((error) => console.error("error:", error));
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  console.log("imageDetails: ", imageDetails);
  console.log("movies: ", movies);
  console.log("el array es: ", imageDetails);

  // if (!isLoaded){
  //   return <p>cargando...</p>
  // }

  function handleSlide(currentIndex: number) {
    setCurrentImageIndex(currentIndex);
  }

  return (
    <>
        <Header  />
        <div className="main">
          <div className="container-movie">
          <ImageGallery
            className="image-gallery"
            items={imageDetails}
            showPlayButton={false}
            showFullscreenButton={false}
            showThumbnails={false}
            showBullets={true}
            autoPlay={true}
            slideInterval={5000}
            onSlide={handleSlide}
          />

          {/* renderiza el siguiente parrafo unicamente si existe contenido en imageDetails y ya esta renderizado el componente  ImageGallery*/}
             
          { isLoaded ? ( 
              <p className="movie-title">
                { imageDetails[currentImageIndex]?.title }
              </p>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
        </div>
      <Footer />
    </>
  );
}
export { Home };
