import { Link } from "react-router-dom";
import './Header.css'
import { Button } from "../Button/Button";

function Header(): React.JSX.Element{
    return (
        <header className="header">
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                         logo de empresa
                        </Link>
                    </li>

                    <li>
                        <Link to="./cines">
                            Cines
                        </Link>
                    </li>

                    <li>
                        <Link to="/proyecciones">
                            Proyecciones
                        </Link>
                    </li>

                    <li>
                        <Link to="/colaboraciones">
                            Colaboraciones
                        </Link>
                    </li>
                    
                </ul>
            </nav>

           <Button label="Iniciar Sessión"/>
           <Button label="Registrarse"/>
        </header>
    )
}

export { Header };