import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { MainContainer } from "../../components/Home/MainContainer";
import { MovieClass } from "../../classes/MovieClass";
import { MovieInterface } from "../../interfaces/MovieInterface";
import { ImageDetailInterface } from "../../interfaces/ImageDetailInterface";
import { SpinnerCharge } from "../../components/SpinnerCharge/SpinnerCharge";
import ImageGallery from "react-image-gallery";
import { ButtonBillboard } from "../../components/Button/ButtonBillboard";


function Proyecciones(): React.JSX.Element {
  const [movies, setMovies] = useState<MovieClass[]>([]);
  const [moviesFiltered, setMoviesFiltered] = useState<ImageDetailInterface[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Realizar la petición a la API
    fetch("http://localhost:8081/peliculas")
      .then((response) => response.json())
      .then((data: MovieInterface[]) => {
        // Convertir cada objeto JSON en una instancia de la clase Photo
        setMovies(data.map((movieData) => new MovieClass(movieData)));
        // Extraer las imageDetails de cada objeto y agregarlas al array 'imageDetails'
        setMoviesFiltered(data.map(
          (movieData) => {
            const movie = new MovieClass(movieData);
            return {
              original: movie.getUrl(),
              title: movie.getTitle(),
            };
          }
        ));
        if (movies.length) {
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("error durante la petición get /peliculas:", error);
        setIsLoading(false); // También establece isLoading en false en caso de error
      });
  }, [movies]);

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
        <div className="container-proyecciones">
          {movies.length ? (
            <>
              <div className="image-gallery">
                <ImageGallery
                  items={moviesFiltered}
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
                    {moviesFiltered[currentImageIndex]?.title}
                  </p>

                  <ButtonBillboard title="Compra ya tus entradas" />
                </div>
              </div>

              <MainContainer title='Tus Películas ODS!' moviesObject={movies} />
            </>
          ) : (
            <p>No hay Películas.</p>
          )}
        </div>
      </div>
      <Footer />
      <main>
      </main>
    </>
  );
}

export { Proyecciones };
