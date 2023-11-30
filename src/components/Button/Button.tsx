import "./Button.css"

interface ButtonProps {
    // onClick: () => void;
    label: string;
}

// Es recomendable crear una interfaz para cada componente indicando los tipos de las props
function Button({ label }: ButtonProps) : React.JSX.Element {
    return (
        <button className="button">
            <span>{ label} </span>
            <svg>
		        <rect x="0" y ="0" fill="none"></rect>
			</svg>
        </button>
    )
}

export { Button };