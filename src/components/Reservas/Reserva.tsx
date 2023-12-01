import "./Reservas.css";

function Reserva(): React.JSX.Element {
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

      <div className="butaca">
        <div className="row1">
          1<button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>
        <div className="row2">
          2<button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>
        <div className="row3">
          3<button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>
        <div className="row4">
          4<button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>
        <div className="row5">
          5
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>
      </div>
    </div>
  );
}
export { Reserva };
