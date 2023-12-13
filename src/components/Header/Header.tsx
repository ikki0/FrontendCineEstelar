import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import { Seeker } from '../../components/Header/Seeker';
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { RegardsUser } from "./RegardsUser";

function Header(): React.JSX.Element {

  const [searchIsClicked, setSearchIsClicked] = useState<boolean>(false);
  const [isLogged, setIsLogged] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("name")) {
      setIsLogged(true);
    }
  }, []);
  
  function handleClick() {
    setSearchIsClicked(true);
  }

  function signOut() {
    localStorage.removeItem("name");
    setIsLogged(false);
  }

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
              <Link to="/cines" className="title-header">
                <p className="title-header">Cines</p>
              </Link>
            </li>

            <li>
              <Link to="/peliculas">
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

          <ul className="container-buttons">
            {isLogged ? (
              <>
              <li>
                <RegardsUser nameUser={localStorage.getItem("name") ?? ""}/>
              </li>

              <li>
                <picture className="picture-logo">
                  <Link to="/datos-personales">
                    <img
                      className="logo-user"
                      src="/src/assets/images/Header/userWhite.svg"
                      alt="logo_cine_estelar"
                    />
                  </Link>
                </picture>
              </li>

              <li>
                <p
                  onClick={signOut}
                  className="title-header close-sesion"
                  >
                    Cerrar Sesión
                  </p>
              </li>
              </>
              ) : ( 
              <>
                <li>
                  <Link to="/iniciar-sesion">
                    <Button label="Iniciar Sesión" />
                  </Link>
                </li>
    
                <li>
                  <Link to="/registrarse">
                    <Button label="Registrarse" />
                  </Link>
                </li>
              </>
              )}

          <li>
            <SearchIcon onClick={ handleClick } fontSize="large" sx={{ cursor: "pointer"}}/>
          </li>

          
          </ul>
        </ul>

        {searchIsClicked && <Seeker setSearchIsClicked={setSearchIsClicked}/>}
      </nav> 
    
    </header>
  );
}

export { Header };
