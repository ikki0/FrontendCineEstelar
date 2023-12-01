import React from 'react';
import { Header } from "../../components/Header/Header"
import Filtro from '../../components/Cine/Filtro.tsx'
import { SeleccionCine } from '../../components/Cine/SeleccionCine.tsx';

function Cines(): React.JSX.Element {
    return (
        <>
            <Header/>
            <Filtro/>
            <SeleccionCine/>

        </>
    );
}
export { Cines };