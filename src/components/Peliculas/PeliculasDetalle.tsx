// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "./PeliculasDetalle.css";
// import { ButtonBillboard } from "../Button/ButtonBillboard";

// interface DetallePelicula {
//     id_pelicula: number;
//     titulo: string;
//     sinopsis: string;
//     pais: string;
//     year: string;
//     imagen: string;
//     imagen_horizontal: string;
//     ods: number;
//     generos: Genero[];
//     directores: Director[];
//     actors: Actores[];
// }
// interface Genero {
//     idGenero: string;
//     nameGenero: string;
// }
// interface Director {
//     idDirector: number;
//     nombreDirector: string;
//     apellidoDirector: string;
// }
// interface Actores {
//     idActor: number;
//     nombreActor: string;
//     apellidoActor: string;
// }

// function PeliculasDetalle() {
//     const [detallePelicula, setDetallePelicula] = useState<DetallePelicula | null>(null);
//     const { id } = useParams<{ id: string }>(); // Usamos la tipificación para el parámetro de la URL
//     const [esEnEstreno, setEsEnEstreno] = useState<boolean>(false);
//     const [selectedPeliculaId, setSelectedPeliculaId] = useState<number | null>(null);
   
//     useEffect(() => {
//         const obtenerDetallePelicula = async () => {
//             try {
//                 const response = await fetch(`http://localhost:8081/peliculas/detalle/${id}`);
//                 if (!response.ok) {
//                     throw new Error('No se pudieron obtener los detalles de la película');
//                 }
//                 const data = await response.json();
//                 setDetallePelicula(data);

//                 const estrenosResponse = await fetch('http://localhost:8081/horarios/estrenos');
//                 if (estrenosResponse.ok) {
//                     const estrenosData = await estrenosResponse.json();
//                     const estaEnEstreno = estrenosData.some((pelicula: any) => pelicula.id_pelicula === data.id_pelicula);
//                     setEsEnEstreno(estaEnEstreno);
//                 } else {
//                     setEsEnEstreno(false);
//                 }
//             } catch (error) {
//                 console.error('Error al obtener los detalles de la película:', error);
//                 setEsEnEstreno(false);
//             }
//         };
//         const peliculaIdLocalStorage = localStorage.getItem('selectedPeliculaId');
//         if (peliculaIdLocalStorage) {
//             setSelectedPeliculaId(peliculaIdLocalStorage);
//         }
//         obtenerDetallePelicula();
//     }, [id]);

//     const handleButtonBillboardClick = () => {
//         if (esEnEstreno) {
//             window.location.href = "http://localhost:8081/horarios/estrenos";
//         }
//     };
//     const handleClick = (id_pelicula: string) => {
//         setSelectedPeliculaId(id_pelicula);
//         localStorage.setItem('selectedCineId', id_cine); // Guardar en localStorage
//       };

//     if (!detallePelicula) {
//         return <div>Cargando...</div>;
//     }

//     const obtenerGeneros = () => {
//         return detallePelicula.generos.map((genero) => genero.nameGenero).join(', ');
//     }
//     const obtenerDirectores = () => {
//         return detallePelicula.directores.map((director) => `${director.nombreDirector} ${director.apellidoDirector}`).join(', ');
//     };
//     const obtenerActores = () => {
//         return detallePelicula.actors.map((actor) => `${actor.nombreActor} ${actor.apellidoActor}`).join(', ');
//     };
    
//     return (
//         <div className="container-box">
//         <div className="movie-details">
//             <picture className='img-container'>
//                 <img className='img-movie' src={`../../../${detallePelicula.imagen_horizontal}`} alt={detallePelicula.titulo} />
//             </picture>
//             <div className="title-container">
//                 <h1 className="title-element">{detallePelicula.titulo}</h1>
//                 <div className="p-details">
//                     <p className="p-element">Sinopsis: {detallePelicula.sinopsis} </p>
//                     <p className="p-element">País: {detallePelicula.pais}</p>
//                     <p className="p-element">Año: {detallePelicula.year}</p>
//                     <p className="p-element">Géneros: {obtenerGeneros()}</p>
//                     <p className="p-element">Director: {obtenerDirectores()}</p>
//                     <p className="p-element">Actores: {obtenerActores()}</p>
//                 </div>
//             </div>
//         </div>
//         {esEnEstreno && (
//             <button className="button-container" onClick={handleButtonBillboardClick}>
//                 <ButtonBillboard title="¡Compra aquí tu entrada!" />
//             </button>
//         )}
//         </div>
//     );
// }

// export default PeliculasDetalle;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PeliculasDetalle.css";
import { ButtonBillboard } from "../Button/ButtonBillboard";

interface DetallePelicula {
  id_pelicula: number;
  titulo: string;
  sinopsis: string;
  pais: string;
  year: string;
  imagen: string;
  imagen_horizontal: string;
  ods: number;
  generos: Genero[];
  directores: Director[];
  actors: Actores[];
}
interface Genero {
    idGenero: string;
    nameGenero: string;
}
interface Director {
    idDirector: number;
    nombreDirector: string;
    apellidoDirector: string;
}
interface Actores {
    idActor: number;
    nombreActor: string;
    apellidoActor: string;
}


function PeliculasDetalle() {
  const [detallePelicula, setDetallePelicula] = useState<DetallePelicula | null>(null);
  const { id } = useParams<{ id: string }>();
  const [esEnEstreno, setEsEnEstreno] = useState<boolean>(false);

  useEffect(() => {
    const obtenerDetallePelicula = async () => {
      try {
        const response = await fetch(`http://localhost:8081/peliculas/detalle/${id}`);
        if (!response.ok) {
          throw new Error('No se pudieron obtener los detalles de la película');
        }
        const data = await response.json();
        setDetallePelicula(data);

        const estrenosResponse = await fetch('http://localhost:8081/horarios/estrenos');
        if (estrenosResponse.ok) {
          const estrenosData = await estrenosResponse.json();
          const estaEnEstreno = estrenosData.some((pelicula: any) => pelicula.id_pelicula === data.id_pelicula);
          setEsEnEstreno(estaEnEstreno);
        } else {
          setEsEnEstreno(false);
        }
      } catch (error) {
        console.error('Error al obtener los detalles de la película:', error);
        setEsEnEstreno(false);
      }
    };

    obtenerDetallePelicula();
  }, [id]);

  const handleButtonBillboardClick = () => {
    if (esEnEstreno) {
      localStorage.setItem('selectedPeliculaId', detallePelicula?.id_pelicula.toString() || '');
      window.location.href = "http://localhost:8081/horarios/estrenos";
    }
  };

  const obtenerGeneros = () => {
    return detallePelicula?.generos.map((genero) => genero.nameGenero).join(', ') || '';
  }
  const obtenerDirectores = () => {
    return detallePelicula?.directores.map((director) => `${director.nombreDirector} ${director.apellidoDirector}`).join(', ') || '';
  };
  const obtenerActores = () => {
    return detallePelicula?.actors.map((actor) => `${actor.nombreActor} ${actor.apellidoActor}`).join(', ') || '';
  };

  if (!detallePelicula) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container-box">
      <div className="movie-details">
        <picture className='img-container'>
          <img className='img-movie' src={`../../../${detallePelicula.imagen_horizontal}`} alt={detallePelicula.titulo} />
        </picture>
        <div className="title-container">
          <h1 className="title-element">{detallePelicula.titulo}</h1>
          <div className="p-details">
            <p className="p-element">Sinopsis: {detallePelicula.sinopsis} </p>
            <p className="p-element">País: {detallePelicula.pais}</p>
            <p className="p-element">Año: {detallePelicula.year}</p>
            <p className="p-element">Géneros: {obtenerGeneros()}</p>
            <p className="p-element">Director: {obtenerDirectores()}</p>
            <p className="p-element">Actores: {obtenerActores()}</p>
          </div>
        </div>
      </div>
      {esEnEstreno && (
        <button className="button-container" onClick={handleButtonBillboardClick}>
          <ButtonBillboard title="¡Compra aquí tu entrada!" />
        </button>
      )}
    </div>
  );
}

export default PeliculasDetalle;

