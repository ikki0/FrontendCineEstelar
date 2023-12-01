
import  React from 'react';
import { Header } from '../../components/Header/Header';
import { Reserva } from '../../components/Reservas/Reserva';
function Reservas(): React.JSX.Element{
    return(
        <>
           <Header />
           <Reserva />

        </>
    );
}
export {Reservas}; 