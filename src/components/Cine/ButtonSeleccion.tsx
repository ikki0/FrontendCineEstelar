import "./ButtonSeleccion.css";

interface ButtonSeleccionProps {
    label: string;
}

function ButtonSeleccion({ label }: ButtonSeleccionProps): React.ReactElement {
    return (
        <button className="button button-seleccion"> {/* Agregué la clase 'button-seleccion' */}
            <span>{label}</span>
            <svg>
                <rect x="0" y="0" fill="none"></rect>
            </svg>
        </button>
    );
}

export { ButtonSeleccion };
