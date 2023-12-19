import { Routes, Route } from "react-router-dom";
import { Cines } from "../views/Cines/Cines";
import { Home } from "../views/Home/Home";
import { AppFormSingUp } from "../components/form/AppFormSingUp";
import { AppFormLogin } from "../components/form/AppFormLogin ";
import { Colaboradores } from "../views/Colaboraciones/Colaboraciones";
import { Nosotros } from "../views/Por que nosotros/Nosotros";
import { Reservas } from "../views/Reservas/Reservas";
import { Proyecciones } from "../views/Proyecciones/Proyecciones";
import Login from "../views/Login/Login";
import { SingUp } from "../views/SingUp/SingUp";
import { Contacto } from "../views/Contacto/Contacto";
import { Perfil } from "../views/Perfil/Perfil";
import { Peliculas } from "../views/Peliculas/Peliculas";
import { Somos } from "../views/Quienes somos/Somos";
import { Detalle } from "../views/PeliculasDetalle/Detalle";
import { MovieHour } from "../views/MovieHour/MovieHour";
import { PurchaseDetails } from "../views/PurchaseDetails/PurchaseDetails";

function RouteComponent(): React.JSX.Element{
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/cines" element={ <Cines /> } />
            <Route path="/registro" element={ <AppFormSingUp /> } />
            <Route path="/inicio" element={ <AppFormLogin /> } />
            <Route path="/peliculas" element={ <Peliculas />} />
            <Route path="/detalle/:id" element={ <Detalle />} />
            <Route path="peliculas/detalle/:id" element={ <Detalle />} />
            <Route path="cines/detalle/:id" element={ <Detalle />} />
            <Route path="/colaboraciones" element={ <Colaboradores /> } />
            <Route path="/contacto" element={ <Contacto/> } />
            <Route path="/porquenosotros" element={ <Nosotros /> } />
            <Route path="/reservas" element={ <Reservas /> } />
            <Route path="/proyecciones" element={ <Proyecciones /> } />
            <Route path="/iniciar-sesion" element={ <Login /> } />
            <Route path="/registrarse" element={ <SingUp /> } />
            <Route path="/perfil" element={ <Perfil />}/>
            <Route path="/quienessomos" element={ <Somos /> } />
            <Route path='/seleccionar-horario' element={ <MovieHour />} />
            <Route path='/detalles-compra' element={<PurchaseDetails/>} />
            <Route path="*" element={ <h1>Esta Página Todavía no existe 🤔</h1> } />
            
        </Routes>
    );
}
export { RouteComponent }