import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { MovieInterface } from "../../interfaces/MovieInterface";
import { ImageDetailInterface } from "../../interfaces/ImageDetailInterface";
import { MovieClass } from "../../classes/MovieClass";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { ButtonBillboard } from "../../components/Button/ButtonBillboard";
import { MainContainer } from "../../components/Home/MainContainer";
import { SpinnerCharge } from "../../components/SpinnerCharge/SpinnerCharge";

import "./Home.css";

function Home(): React.JSX.Element {
  const [movies, setMovies] = useState<MovieClass[]>([]);
  const [imageDetails, setImageDetails] = useState<ImageDetailInterface[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true); 
  // Es necesario utilizar useEffect para realizar cualquier petición a una API para evitar peticiones infinitas
  useEffect(() => {
    // Realizar la petición a la API
    fetch("http://localhost:8081/peliculas")
      .then((response) => response.json())
      .then((data: MovieInterface[]) => {
        // Convertir cada objeto JSON en una instancia de la clase Photo
        const movieObjects = data.map((movieData) => new MovieClass(movieData));
        setMovies(movieObjects);

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

  function handleSlide(currentIndex: number) {
    setCurrentImageIndex(currentIndex);
  }

  return (
    <>
      <Header />
      <div className="main">
        <div className="container-movie">
          {movies.length ? (
            <>
              <div className="image-gallery">
                <ImageGallery
                  items={imageDetails}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showThumbnails={false}
                  showBullets={true}
                  autoPlay={true}
                  slideInterval={5000}
                  onSlide={handleSlide}
                />

                <div className="container-movie-info">
                  <p className="movie-title">
                    {imageDetails[currentImageIndex]?.title}
                  </p>

                  <ButtonBillboard title="Compra ya tus entradas" />
                </div>
              </div>

              <MainContainer title='Top Películas' moviesObject={movies} />
            </>
          ) : (
            <p>No hay Películas.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
export { Home };
