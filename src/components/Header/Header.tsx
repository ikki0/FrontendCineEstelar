import { Link } from "react-router-dom";
import "./Header.css";
import { Button } from "../Button/Button";

function Header(): React.JSX.Element {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <picture className="picture-logo">
              <Link to="/">
                <img
                  className="logoCine"
                  src="/src/assets/images/logoEmpresaPNG.png"
                  alt="logo_cine_estelar"
                />
              </Link>

              <Link to="/">
                <p className="title-header name-logo">Cine Estelar</p>
              </Link>
            </picture>
          </li>

          <ul>
            <li>
              <Link to="./cines" className="title-header">
                <p className="title-header">Cines</p>
              </Link>
            </li>

            <li>
              <Link to="./peliculas">
                <p className="title-header">Películas</p>
              </Link>
            </li>

            <li>
              <Link to="/proyecciones">
                <p className="title-header">Proyecciones</p>
              </Link>
            </li>

            <li>
              <Link to="/colaboraciones">
                <p className="title-header">Colaboraciones</p>
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="iniciarSesion">
                <Button label="Iniciar Sessión" />
              </Link>
            </li>

            <li>
              <Link to="registrarse">
                <Button label="Registrarse" />
              </Link>
            </li>
          </ul>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
