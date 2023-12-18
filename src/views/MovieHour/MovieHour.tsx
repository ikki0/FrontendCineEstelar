import { useEffect, useState } from "react";
import { MovieDateClass } from "../../classes/MovieDateClass";
import { MovieDateInterface } from "../../interfaces/MovieDateInterface";
import { SpinnerCharge } from "../../components/SpinnerCharge/SpinnerCharge";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { TitleContainer } from "../../components/Home/TitleContainer";
import "./MovieHour.css";
import { useNavigate } from "react-router-dom";

function MovieHour(): React.JSX.Element {
    const [movieDate, setMovieDate] = useState<MovieDateClass[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const idCine = 1;
        const idPelicula = 1;
        // Realizar la petición a la API
        fetch(`http://localhost:8081/horarios/estrenos/${idCine}/${idPelicula}`)
            .then((response) => response.json())
            .then((data: MovieDateInterface[]) => {
                // Convertir cada objeto JSON en una instancia de la clase Photo
                const movieObjects = data.map((movieData) => new MovieDateClass(movieData));
                setMovieDate(movieObjects);

                // Extraer las imageDetails de cada objeto y agregarlas al array 'imageDetails'
                setIsLoading(false);

            })
            .catch((error) => {
                console.error("error durante la petición get horarios/estrenos/1/1:", error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return (
            <SpinnerCharge />
        );
    }

    function handleMovieDate(idHorario: number ): void {
        window.localStorage.setItem("idHorario", idHorario.toString());
        navigate("/reservas");        
    }

    return (
        <>
            <Header />
            <div className="main">
                <TitleContainer title="Horarios" />
                <div className="movieHour-container">
                    {movieDate.length ? (

                        movieDate.map((movie) => {
                            return (
                                <div onClick={() => handleMovieDate(movie.getIdHorario())} className="movieHour-sections" key={movie.getIdHorario()}>
                                    <section className="movieHour-container-dia">
                                        <p>Día: {movie.getIdDia()}</p>
                                    </section>

                                    <section className='movieHour-container-hora'>
                                        <p>Horario: {movie.getIdHora()}</p>
                                    </section>
                                </div>
                            );
                        })
                    ) : (
                        <p>No hay Horarios.</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}

export { MovieHour }
