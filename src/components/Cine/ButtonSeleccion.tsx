import "./ButtonSeleccion.css"

interface ButtonSeleccion {
    label: string;
}

function ButtonSeleccion({ label }: ButtonSeleccion) : React.JSX.Element {
    return (
        <button className="button">
            <span>{ label} </span>
            <svg>
		        <rect x="0" y ="0" fill="none"></rect>
			</svg>
        </button>
    )
}
export { ButtonSeleccion };