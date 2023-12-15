import React from 'react';
import './Detalle.css'
import { Header } from '../../components/Header/Header.tsx';
import { Footer } from '../../components/Footer/Footer.tsx';
import PeliculasDetalle from '../../components/Peliculas/PeliculasDetalle.tsx';


function Detalle(): React.JSX.Element {
    return (
        <>
            <Header />
            <div className='main'>
          <PeliculasDetalle/>
            </div>
            <Footer />
        </>
    );
}
export { Detalle };