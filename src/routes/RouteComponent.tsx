import { Routes, Route } from "react-router-dom";
import { Cines } from "../views/Cines/Cines";
import { Home } from "../views/Home/Home";

function RouteComponent(): React.JSX.Element{
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/cines" element={ <Cines /> } />
        </Routes>
    );
}
export { RouteComponent }