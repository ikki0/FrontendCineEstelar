import { Link } from "react-router-dom";
import './Header.css'
import { Button } from "../Button/Button";

function Header(): React.JSX.Element{
    return (
        <header className="header">
            <nav>
                <ul>
                    <li>
                        <picture className="picture-logo">
                        <Link to="/">
                            <img className="logoCine" src='/src/assets/images/logoEmpresaPNG.png' alt="logo_cine_estelar" />
                        </Link>

                        <Link to="/">
                            <p className="name-logo">Cine Estelar</p>
                        </Link>
                      
                        </picture>
                        
                    </li>

                    <li>
                        <Link to="./cines">
                            Cines
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