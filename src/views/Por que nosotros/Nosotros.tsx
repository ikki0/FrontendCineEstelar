import  React from 'react';
import './Nosotros.css'
import { NosotrosComponent } from '../../components/Footer/NosotrosComponent';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

function Nosotros(): React.JSX.Element{
    return(
        <>
        <Header/>
        <div className='main'>
            <NosotrosComponent />
            </div>
            <Footer/>
        </>
    );
}
export {Nosotros}; 