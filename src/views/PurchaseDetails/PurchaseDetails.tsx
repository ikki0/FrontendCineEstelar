/* Mis variables son:
window.localStorage.setItem('fila', fila.toString());
window.localStorage.setItem('columna', columna.toString());
window.localStorage.setItem('cineId', cineId.toString());
window.localStorage.setItem('peliculaId', peliculaId.toString()); 
    window.localStorage.setItem('dia', dia);
    window.localStorage.setItem('hora', hora);
*/

import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { TitleContainer } from "../../components/Home/TitleContainer";
import { MovieInterface } from "../../interfaces/MovieInterface";
import { MovieClass } from "../../classes/MovieClass";
import { SpinnerCharge } from "../../components/SpinnerCharge/SpinnerCharge";

import './PurchaseDetails.css'

function PurchaseDetails(): React.JSX.Element {
    const [movie, setMovie] = useState<MovieClass>();
    const [cine, setCine] = useState<any>();
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

    // * Datos del cine
    useEffect(() => {
        const cineId = window.localStorage.getItem('cineId') || 'no hay cineId';
        // Realizar la petición a la API
        fetch(`http://localhost:8081/cines/${cineId}`)
            .then((response) => response.json())
            .then((data) => {
                setCine(data);
                setIsLoading(false);

            })
            .catch((error) => {
                console.error("error durante la petición get /cines/idCine:", error);
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
            <div className='main'>
                {movie ? (
                    <div className='PurchaseDetails-containerDetails'>
                        <div className='PurchaseDetails-wrapper'>
                            <header className="PurchaseDetails-header">
                                <TitleContainer title='detalles reserva' />
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

                                <article className='PurchaseDetails-article'>
                                    <h3 className="PurchaseDetails-h3">Hora</h3>
                                    <p className='PurchaseDetails-p'>{window.localStorage.getItem('hora') || 'no hay hora'}</p>
                                </article>

                                <article className='PurchaseDetails-article'>
                                    <h3 className="PurchaseDetails-h3">Cine</h3>
                                    <p className='PurchaseDetails-p'>{cine?.nombre_cine || 'no hay cine'}</p>
                                </article>
                                
                                <article className='PurchaseDetails-article PurchaseDetails-chairs'>
                                    <h3 className="PurchaseDetails-h3">Asiento</h3>
                                    <p className='PurchaseDetails-p'>Fila: {window.localStorage.getItem('fila') || 'no hay fila'}</p>
                                    <p>Columna: {window.localStorage.getItem('columna' || 'no hay columna')}</p>
                                </article>
                            </section>
                        </div>
                    </div>
                ) : (
                    <p>No hay Película</p>
                )
                }
            </div>
            <Footer />
        </>
    );
}

export { PurchaseDetails }