import './Contacto.css'
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import ContactoComponent from '../../components/Footer/ContactoComponent'


function Contacto (): React.JSX.Element {
    return (
      <>
      <Header/>
      <div className="main">
      <ContactoComponent />
      </div>
      <Footer/>
      </>
    )
}

export { Contacto }
