import './Login.css'
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { AppFormLogin as LoginForm } from "../../components/form/AppFormLogin "

function AppFormLoginComponent (): React.JSX.Element {
    return (
      <>
      <Header/>
      <div className="main">
      <LoginForm/>
      </div>
      <Footer/>
      </>
    )
}

export { AppFormLoginComponent as AppFormLogin }
