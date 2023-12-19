import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { TitleContainer } from "../../components/Home/TitleContainer";
import { MovieClass } from "../../classes/MovieClass";
import { MovieInterface } from "../../interfaces/MovieInterface";
import { SpinnerCharge } from "../../components/SpinnerCharge/SpinnerCharge";
import { FilterCinemasComponent } from "../../components/CinemaByMovie/FilterCinemasComponent";

function CinemaByMovie(): React.JSX.Element {
    const [movie, setMovie] = useState<MovieClass>();
    const [isLoading, setIsLoading] = useState(true);

     // * Datos de la pelicula
     useEffect(() => {
        const peliculaId = window.localStorage.getItem('peliculaId') || 'no hay peliculaId';
        // Realizar la petición a la API
        fetch(`http://localhost:8081/peliculas/${peliculaId}`)
            .then((response) => response.json())
            .then((data: MovieInterface) => {
                const movieObject = new MovieClass(data);
                setMovie(movieObject);
                setIsLoading(false);

            })
            .catch((error) => {
                console.error("error durante la petición get /peliculas/idPelicula:", error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return (
            <SpinnerCharge />
        );
    }

    return (
        <>
            <Header />
            {movie ? (
                <div className="main">
                     <div className='PurchaseDetails-containerDetails'>
                        <div className='PurchaseDetails-wrapper'>
                            <header className="PurchaseDetails-header">
                                <TitleContainer title='Buscar Cines' />
                                <picture className='PurchaseDetails-picture'>
                                    <img className='PurchaseDetails-img' src={movie.getUrlHorizontal()} alt='imagen pelicula' title={movie.getTitle()} />
                                </picture>
                            </header>

                            <section className="PurchaseDetails-section">
                                <header className='PurchaseDetails-title'>
                                    <h1 className="PurchaseDetails-h1">
                                        {movie.getTitle()}
                                    </h1>
                                </header>

                                <article className='PurchaseDetails-article'>
                                    <h3 className="PurchaseDetails-h3">Fecha</h3>
                                    <p className='PurchaseDetails-p'>{window.localStorage.getItem('dia') || 'no hay fecha'}</p>
                                </article>

                                <FilterCinemasComponent />

                            </section>
                        </div>
                    </div>
                </div>
            ) :(
                <div>no existen la película</div>
            )
            
        }
            <div className='main'>
            </div>
            <Footer />
        </>
    );
}

export { CinemaByMovie }