import { BrowserRouter } from 'react-router-dom';
import './App.css'

import { RouteComponent } from './routes/RouteComponent';


function App() {
  // const [currentNumber, setCurrentNumber] = React.useState(0);

  return (
     /* Ejemplo: <h1>prueba</h1>
      <Button onClick={() => setCurrentNumber(currentNumber + 1) } />
      <p>Numero de veces presionado: {currentNumber}</p> */
   
    <>
      <BrowserRouter>
        <RouteComponent/>
      </BrowserRouter>
    </>
  );
}

export default App
