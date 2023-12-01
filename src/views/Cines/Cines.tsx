import React from 'react';
import Filtro from '../../components/Cine/Filtro.tsx'
import { SeleccionCine } from '../../components/Cine/SeleccionCine.tsx';

function Cines(): React.JSX.Element {
    return (
        <>
            <Filtro/>
            <SeleccionCine/>
        </>
    );
}
export { Cines };