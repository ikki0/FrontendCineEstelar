import  React from 'react';
import './Colaboraciones.css'
import { Colaboracion } from '../../components/Colaborador/Colaboracion';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

function Colaboradores(): React.JSX.Element{
    return(
        <>
        <Header/>
        <div className='main'>
            <div className='container-c'>
            <Colaboracion />
            </div>
            </div>
            <Footer/>
        </>
    );
}
export {Colaboradores}; 