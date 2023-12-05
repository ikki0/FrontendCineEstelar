import React, { useEffect, useState } from 'react';
import "./SeleccionCine.css"
import { ButtonSeleccion } from "../Cine/ButtonSeleccion";
import { ClassNames } from '@emotion/react';

interface Cine {
    id_cine: number | string;
    ubicacion: string;
}

interface RequestOptions {
    method: string;
    redirect?: RequestRedirect | undefined;
}


function SeleccionCine(): React.JSX.Element {

    const [cines, setCines] = useState<Cine[]>([]);

    useEffect(() => {
        const requestOptions: RequestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:8081/cines", requestOptions)
            .then(response => response.json())
            .then((data: Cine[]) => {
                setCines(data);
            })
            .catch(error => {
                console.log('error', error);
            });
    }, []);

    return (
        <>
            <div className='cines'>
                {cines.map((result) => (
                    <ButtonSeleccion key={result.id_cine} label={result.ubicacion} />
                ))}
            </div>
        </>
    );
}

export { SeleccionCine };
