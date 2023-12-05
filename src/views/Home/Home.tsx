import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import './Home.css'

function Home(): React.JSX.Element {
  return (
    <>
      <Header />
      <div className="main">
        <h1>PAGINA Home</h1>
      </div>
      <Footer />
    </>
  )
}

export { Home }