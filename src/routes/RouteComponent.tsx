import { Routes, Route } from "react-router-dom";
import { Cines } from "../views/Cines/Cines";
import { Home } from "../views/Home/Home";
import { AppFormSingUp } from "../components/form/AppFormSingUp";
import { AppFormLogin } from "../components/form/AppFormLogin ";
import { Peliculas } from "../views/Peliculas/peliculas";
import { Colaboradores } from "../views/Colaboraciones/Colaboraciones";
import { Reservas } from "../views/Reservas/Reservas";



function RouteComponent(): React.JSX.Element{
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/cines" element={ <Cines /> } />
            <Route path="/registro" element={ <AppFormSingUp /> } />
            <Route path="/inicio" element={ <AppFormLogin /> } />
            <Route path="/peliculas" element={ <Peliculas /> } />
            <Route path="/colaboraciones" element={ <Colaboradores /> } />
            <Route path="/reservas" element={ <Reservas /> } />
            
        </Routes>
    );
}
export { RouteComponent }