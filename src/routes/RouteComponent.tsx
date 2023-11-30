import { Routes, Route } from "react-router-dom";
import { Cines } from "../views/Cines/Cines";
import { Home } from "../views/Home/Home";
import { AppFormSingUp } from "../views/form/AppFormSingUp";
import { AppFormLogin } from "../views/form/AppFormLogIn ";

function RouteComponent(): React.JSX.Element{
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/cines" element={ <Cines /> } />
            <Route path="/registro" element={ <AppFormSingUp /> } />
            <Route path="/inicio" element={ <AppFormLogin /> } />
        </Routes>
    );
}
export { RouteComponent }