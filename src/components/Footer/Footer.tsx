import { Link } from 'react-router-dom';
import './Footer.css'

function Footer(): React.JSX.Element {
  return (
    <footer className="footer">
      <div className="footerElements">
        <Link to="/contacto">
          <p>Contacto</p>
        </Link>

        <Link to="/porquenosotros">
          <p>¿Por qué nosotros?</p>
        </Link>

        <Link to="/quienessomos">
          <p>¿Quiénes somos?</p>
        </Link>
      </div>
    </footer>
  )
}
export { Footer };
