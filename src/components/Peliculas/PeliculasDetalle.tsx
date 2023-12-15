import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PeliculasDetalle.css";

interface DetallePelicula {
    id_pelicula: number;
    titulo: string;
    sinopsis: string;
    pais: string;
    year: string;
    imagen: string;
    imagen_horizontal: string;
    ods: number;
}

function PeliculasDetalle() {
    const [detallePelicula, setDetallePelicula] = useState<DetallePelicula | null>(null);
    const { id } = useParams<{ id: string }>(); // Usamos la tipificación para el parámetro de la URL

    useEffect(() => {
        const obtenerDetallePelicula = async () => {
            try {
                const response = await fetch(`http://localhost:8081/peliculas/detalle/${id}`);
                if (!response.ok) {
                    throw new Error('No se pudieron obtener los detalles de la película');
                }
                const data = await response.json();
                setDetallePelicula(data);
            } catch (error) {
                console.error('Error al obtener los detalles de la película:', error);
            }
        };

        obtenerDetallePelicula();
    }, [id]);

    if (!detallePelicula) {
        return <div>Cargando...</div>;
    }
    return (
        <div className="movie-details">
            <picture className='img-container'>
                <img className='img-movie' src={detallePelicula.imagen_horizontal} alt={detallePelicula.titulo} />
            </picture>
            <div className="title-container">
                <h2 className="title-element">{detallePelicula.titulo}</h2>
                <p>{detallePelicula.sinopsis}</p>
                <p>{detallePelicula.pais}</p>
                <p>{detallePelicula.year}</p>
            </div>
        </div>
    );
}

export default PeliculasDetalle;
