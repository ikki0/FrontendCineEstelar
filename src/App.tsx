import './App.css'

import { RouteComponent } from './routes/RouteComponent';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {

  return (
      <div className="container">
        <Header />
        <div className="main">
            <RouteComponent />
        </div>
  
        <Footer/>
      </div>
  );
}

export default App
