import React, { useEffect, useState } from 'react';
import { TitleContainer } from '../Home/TitleContainer';
import "./PeliculasFilter.css";

interface PeliculasFilterProps {
    generoId: number | string | null;
}

interface Category {
    idGenero: string;
    nameGenero: string;
    peliculas: Pelicula[]
}
interface Pelicula {
    id_pelicula: number;
    titulo: string;
    sinopsis: string;
    pais: string;
    year: string;
    imagen: string;
    imagen_horizontal: string;
    ods: number;
}

interface RequestOptions {
    method: string;
    redirect?: RequestRedirect | undefined;
}

function PeliculasFilter(props: PeliculasFilterProps): React.JSX.Element {
    const [peliculas, setPeliculas] = useState<Pelicula[]>([]);
    const ruta = `http://localhost:8081/bygeneros/id/${props.generoId}`;

    useEffect(() => {
        if (props.generoId) {
            const requestOptions: RequestOptions = {
                method: 'GET',
                redirect: 'follow',
            };

            fetch(ruta, requestOptions)
                .then(response => response.json())
                .then((data: Category[]) => {
                    data.forEach(category => setPeliculas(category.peliculas));
                })
                .catch(error => {
                    console.log('error', error);
                });
        }
    }, [props.generoId, ruta]);

    return (
        <div className="peliculas-container">
            <div className='title'>
                <TitleContainer title='Películas' />
            </div>
            <div className="peliculas-card">
                {peliculas.map((pelicula) => (
                    <div key={pelicula.id_pelicula} className="movie-element">
                        <picture className='picture-movie'>
                            <img className='image-movie' src={pelicula.imagen} alt={pelicula.titulo} />
                        </picture>
                        <div className="movie_element-div-title">
                            <h2 className="movie_element-title">{pelicula.titulo}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PeliculasFilter;
