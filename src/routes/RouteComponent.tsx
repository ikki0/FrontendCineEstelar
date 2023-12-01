import { Routes, Route } from "react-router-dom";
import { Cines } from "../views/Cines/Cines";
import { Home } from "../views/Home/Home";
import { AppFormSingUp } from "../components/form/AppFormSingUp";
import { AppFormLogin } from "../components/form/AppFormLogin ";
import { Peliculas } from "../views/Peliculas/peliculas";
import { Colaboradores } from "../views/Colaboraciones/Colaboraciones";
import { Nosotros } from "../views/Por que nosotros/Nosotros";




function RouteComponent(): React.JSX.Element{
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/cines" element={ <Cines /> } />
            <Route path="/registro" element={ <AppFormSingUp /> } />
            <Route path="/inicio" element={ <AppFormLogin /> } />
            <Route path="/peliculas" element={ <Peliculas /> } />
            <Route path="/colaboraciones" element={ <Colaboradores /> } />
            <Route path="/contacto" element={ <Nosotros /> } />
            <Route path="/porquenosotros" element={ <Nosotros /> } />
            <Route path="/quienessomos" element={ <Colaboradores /> } />
        </Routes>
    );
}
export { RouteComponent }