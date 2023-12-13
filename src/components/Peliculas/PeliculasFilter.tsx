// import React, { useEffect, useState } from 'react';
// import { TitleContainer } from '../Home/TitleContainer';
// import "./PeliculasFilter.css";

// interface PeliculasCineProps {
//     cineId: string | null; 
//   }

// interface PeliculasFilter {
//     idGenero: number;
//     nameGenero: string;
//     peliculas: [];
// }

// interface RequestOptions {
//   method: string;
//   redirect?: RequestRedirect | undefined;
// }

// function PeliculasFilter(): React.JSX.Element {
//   const [peliculasFilter, setPeliculasFilter] = useState<PeliculasFilter[]>([]);
//   const ruta = `http://localhost:8081/horarios/bygeneros/${nameGenero}`;

//   useEffect(() => {
//     if (nameGenero) {
//       const requestOptions: RequestOptions = {
//         method: 'GET',
//         redirect: 'follow'
//       };

//       fetch(ruta, requestOptions)
//         .then(response => response.json())
//         .then((data: PeliculasFilter[]) => {
//           setPeliculasFilter(data);
//         })
//         .catch(error => {
//           console.log('error', error);
//         });
//     }
//   }, [nameGenero, ruta]); 

//   return (
//     <div className="peliculas-container">
//       <div className='title'>
//       <TitleContainer title='Peliculas'/>
//       </div>
//       <div className="peliculas-card">
//       {peliculasCines.map((pelicula) => (
//         <div key={pelicula.id_pelicula} className="movie-element">
//           <picture className='picture-movie'>
//             <img className='image-movie' src={pelicula.imagen} alt={pelicula.titulo} />
//           </picture>
//           <div className="movie_element-div-title">
//             <h2 className="movie_element-title">{pelicula.titulo}</h2>
//           </div>
//         </div>
       
//       ))}
//        </div>
//     </div>
//   );
// }

// export default PeliculasFilter;
