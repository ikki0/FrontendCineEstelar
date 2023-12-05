import './Contacto.css'
import { ContactoComponent } from "../../components/Footer/ContactoComponent"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"


function Contacto (): React.JSX.Element {
    return (
      <>
      <Header/>
      <div className="main">
        <ContactoComponent/>
      </div>
      <Footer/>
      </>
    )
}

export { Contacto }
