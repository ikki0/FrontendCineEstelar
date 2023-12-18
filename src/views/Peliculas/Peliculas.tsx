import React, { useState } from 'react';
import './Peliculas.css';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import Filtro from '../../components/Cine/Filtro';
import PeliculasFilter from '../../components/Peliculas/PeliculasFilter';
import { PeliculasComponent } from '../../components/Peliculas/PeliculasComponent';

function Peliculas(): React.JSX.Element {
  const [generoSeleccionado, setGeneroSeleccionado] = useState<number | string | null>(null);
  const [mostrarPeliculasFilter, setMostrarPeliculasFilter] = useState(false);

  return (
    <>
      <Header />
      <div className='main'>
        <Filtro onGeneroClick={(generoId) => { 
          setGeneroSeleccionado(generoId);
          setMostrarPeliculasFilter(true);
        }} />
        {mostrarPeliculasFilter && generoSeleccionado ? (
          <PeliculasFilter generoId={generoSeleccionado} />
        ) : (
          <PeliculasComponent />
        )}
      </div>
      <Footer />
    </>
  );
}

export { Peliculas };
