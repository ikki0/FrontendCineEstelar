
import  React from 'react';
import './Reservas.css'
import { Header } from '../../components/Header/Header';
import { Reserva } from '../../components/Reservas/Reserva';
import { Footer } from '../../components/Footer/Footer';
function Reservas(): React.JSX.Element{
    return(
        <>
           <Header />
           <div className='main'>
            <Reserva />
           </div>
            <Footer/>
        </>
    );
}
export {Reservas}; 