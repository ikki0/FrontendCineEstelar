import  React from 'react';
import { Header } from '../../components/Header/Header';
import { Colaboracion } from '../../components/Colaborador/Colaboracion';
function Colaboradores(): React.JSX.Element{
    return(
        <>
            <Header />
        
            <Colaboracion />
        </>
    );
}
export {Colaboradores}; 