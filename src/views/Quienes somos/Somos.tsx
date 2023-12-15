import  React from 'react';
import './Somos.css'
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { SomosComponent } from '../../components/Footer/SomosComponent';

function Somos(): React.JSX.Element{
    return(
        <>
        <Header/>
        <SomosComponent />
        <Footer/>
        </>
    );
}
export {Somos}; 