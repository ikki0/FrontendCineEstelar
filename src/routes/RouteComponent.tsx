import { Routes, Route } from "react-router-dom";
import { Cines } from "../views/Cines/Cines";
import { Home } from "../views/Home/Home";
import { AppFormSingUp } from "../components/form/AppFormSingUp";
import { AppFormLogin } from "../components/form/AppFormLogin ";
import { Peliculas } from "../views/Peliculas/peliculas";
import { Colaboradores } from "../views/Colaboraciones/Colaboraciones";
import { Nosotros } from "../views/Por que nosotros/Nosotros";
import { Reservas } from "../views/Reservas/Reservas";
import { Proyecciones } from "../views/Proyecciones/Proyecciones";
import Login from "../components/Login/Login";
import { SingUp } from "../views/SingUp/SingUp";
import { Contacto } from "../views/Contacto/Contacto";


function RouteComponent(): React.JSX.Element{
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/cines" element={ <Cines /> } />
            <Route path="/registro" element={ <AppFormSingUp /> } />
            <Route path="/inicio" element={ <AppFormLogin /> } />
            <Route path="/peliculas" element={ <Peliculas /> } />
            <Route path="/colaboraciones" element={ <Colaboradores /> } />
            <Route path="/contacto" element={ <Contacto/> } />
            <Route path="/porquenosotros" element={ <Nosotros /> } />
            <Route path="/reservas" element={ <Reservas /> } />
            <Route path="/proyecciones" element={ <Proyecciones /> } />
            <Route path="/registrarse" element={ <Login /> } />
            <Route path="/iniciar-sesion" element={ <SingUp /> } />
            <Route path="*" element={ <h1>Esta Página Todavía no existe 🤔</h1> } />
            
        </Routes>
    );
}
export { RouteComponent }