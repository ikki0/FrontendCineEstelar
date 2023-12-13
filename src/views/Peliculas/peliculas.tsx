import  React from 'react';
import './Peliculas.css'
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import Filtro from '../../components/Cine/Filtro';

// import { PeliculasComponent } from '../../components/Peliculas/PeliculasComponent';

function Peliculas(): React.JSX.Element{
    return(
        <>
        <Header/>
        <div className='main'>
        <Filtro />
        {/* <PeliculasComponent /> */}
        </div>
        <Footer/>
        </>
    );
}
export {Peliculas}; 