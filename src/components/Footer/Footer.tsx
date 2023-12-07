import { Link } from 'react-router-dom';
import './Footer.css'

function Footer(): React.JSX.Element {
  return (
    <footer className="footer">
      <div className="footerElements">
        <Link to="./contacto">
          <a href="">Contacto</a>
        </Link>
        <Link to="./porquenosotros">
          <a href="">¿Por qué nosotros?</a>
        </Link>
        <Link to="./quienessomos">
          <a href="">¿Quiénes somos?</a>
        </Link>
      </div>
    </footer>
  )
}
export { Footer };
