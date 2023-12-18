import { useEffect, useState } from "react";
import "./Reservas.css";
import { SpinnerCharge } from "../SpinnerCharge/SpinnerCharge";
import { ToastContainer, toast } from "react-toastify";

function Reserva(): React.JSX.Element {
  const [butacas, setButacas] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  function handleButaca(ocupado: number, idOcupadas: number): void {
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
          console.log(`butaca reservada correctamente`);
          toast.success('Butaca reservada correctamente', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3500,
          });
        } else {
          toast.error('Error inicio de sesión. Por favor, verifique los campos', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3500,
          });
        }
      })
  }

  return (
    <div className="reserva">
      <h1>ELIGE TUS ASIENTOS</h1>
      <nav>
        <ul>
          <li>
            <img
              src="src/assets/images/Reservas/square-full-solid.svg"
              alt=" disponible"
            />
            <span>Seleccionada</span>
          </li>
          <li>
            <img
              src="src/assets/images/Reservas/user-regular.svg"
              alt="no disponible"
            />
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
          butacas.map((butaca, index) => {
            return (
              <div onClick={() => handleButaca(butaca.ocupado, butaca.idOcupadas)} key={index} className={`reserva-butaca ${butaca.ocupado === 0 ? 'gris' : 'rojo'}`}>
                <img src='src/assets/images/Reservas/chairWhite.svg' alt='silla' />
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
