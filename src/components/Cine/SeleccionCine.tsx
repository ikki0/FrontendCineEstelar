import React from 'react';
import "./SeleccionCine.css"
import { ButtonSeleccion } from "../Cine/ButtonSeleccion";

function SeleccionCine() : React.JSX.Element {
    return (
        <>
            <div className='cines'>
                <ButtonSeleccion label="Cine A"/>
                <ButtonSeleccion label="Cine B"/>
                <ButtonSeleccion label="Cine C"/>
                <ButtonSeleccion label="Cine D"/>
                <ButtonSeleccion label="Cine E"/>
            </div>
        </>
    )
}

export {SeleccionCine};