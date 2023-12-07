import  React from 'react';
import './Peliculas.css'
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import Filtro from '../../components/Cine/Filtro';

function Peliculas(): React.JSX.Element{
    return(
        <>
        <Header/>
        <div className='main'>
        <Filtro/>
        </div>
        <Footer/>
        </>
    );
}
export {Peliculas}; 