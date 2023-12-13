import React from 'react';
import './Cines.css'
import { SeleccionCine } from '../../components/Cine/SeleccionCine.tsx';
import { Header } from '../../components/Header/Header.tsx';
import { Footer } from '../../components/Footer/Footer.tsx';
import { TitleContainer } from '../../components/Home/TitleContainer.tsx';


function Cines(): React.JSX.Element {
    return (
        <>
            <Header />
            <div className='main'>
            <div className='titulo'>
                    <TitleContainer title='Cines' />
                </div>
                <SeleccionCine />
            </div>
            <Footer />
        </>
    );
}
export { Cines };