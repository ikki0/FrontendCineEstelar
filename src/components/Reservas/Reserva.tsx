import { useEffect, useState } from "react";
import "./Reservas.css";
import { SpinnerCharge } from "../SpinnerCharge/SpinnerCharge";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Reserva(): React.JSX.Element {
  const [butacas, setButacas] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    const idHorario = window.localStorage.getItem("idHorario");
    // Realizar la petición a la API
    fetch(`http://localhost:8081/ocupadasbutacas/${idHorario}`)
      .then((response) => response.json())
      .then((data) => {
        setButacas(data);
        console.log(data); // Imprimir los datos en la consola
        setIsLoading(false);

      })
      .catch((error) => {
        console.error("error durante la petición get horarios/estrenos/1/1:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <SpinnerCharge />
    );
  }

  function handleButaca(ocupado: number, idOcupadas: number, fila: number, columna: number, cineId: number, peliculaId: number, dia: string, hora: string): void {
    if (ocupado !== 0) {
      return;
    }

    const userName = window.localStorage.getItem('name') || '';

    fetch(`http://localhost:8081/ocupadas/update/${idOcupadas}/${userName}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true) {
          toast.success('Butaca reservada correctamente, en breve será redireccionado ', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3500,
          });
          saveDatasToLocalStorage(fila, columna, cineId, peliculaId, dia, hora);
          redirectToPurchaseDetails();
        } else {
          toast.error('Error inicio de sesión. Por favor, verifique los campos', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3500,
          });
        }
      })
  }

  function redirectToPurchaseDetails(): void {
    setTimeout(() => {
      navigate('/detalles-compra');
    }, 3500);
  }

  function saveDatasToLocalStorage(fila: number, columna: number, cineId: number, peliculaId: number, dia: string, hora: string): void{
    window.localStorage.setItem('fila', fila.toString());
    window.localStorage.setItem('columna', columna.toString());
    window.localStorage.setItem('cineId', cineId.toString());
    window.localStorage.setItem('peliculaId', peliculaId.toString());
    window.localStorage.setItem('dia', dia);
    window.localStorage.setItem('hora', hora);
  }

  return (
    <div className="reserva">
      <h1>ELIGE TUS ASIENTOS</h1>
      <nav>
        <ul>
          <li>
            <div className='square-gray'></div>
            Disponible
          </li>
          <li>
            <div className='square-red'></div>
            No disponible
          </li>
          <li>
            <img
              src="src/assets/images/Reservas/r-solid.svg"
              alt="reclinable"
            />
            Reclinable
          </li>
          <li>
            <img
              src="src/assets/images/Reservas/wheelchair-solid.svg"
              alt="silla de ruedas"
            />
            Espacio Silla Ruedas
          </li>
          <li>
            <img
              src="src/assets/images/Reservas/a-solid.svg"
              alt=" acompañante"
            />
            Acompañante
          </li>
          <li>
            <img
              src="src/assets/images/Reservas/lock-solid.svg"
              alt="bloqueada"
            />
            Bloqueada
          </li>
        </ul>
      </nav>
      <div className="pantalla">pantalla
      </div>

      <div className="reserva-container">
        {butacas.length ? (
          butacas.map((butaca: any, index:number) => {
            return (
              <div title={butaca.ocupado === 0 ? 'Disponible' : 'No disponible'}  onClick={() => handleButaca(butaca.ocupado, butaca.idOcupadas, butaca.butaca.id_fila, butaca.butaca.id_columna, butaca.horario.salaCineIdCine, butaca.horario.peliculaIdPelicula, butaca.horario.idDia, butaca.horario.idHora)} key={index} className={`reserva-butaca ${butaca.ocupado === 0 ? 'gris' : 'rojo'}`}>
                <img src='src/assets/images/Reservas/chairWhite.svg' alt='silla'  title={butaca.ocupado === 0 ? 'Disponible' : 'No disponible'}/>
              </div>
            );
          })
        ) : (
          <p>No hay Butacas</p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}
export { Reserva };
