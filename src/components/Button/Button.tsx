import "./Button.css"

interface ButtonProps {
    // onClick: () => void;
    label: string;
}

// Es recomendable crear una interfaz para cada componente indicando los tipos de las props
function Button({ label }: ButtonProps) : React.JSX.Element {
    return (
        <button className="button">
            {label}
        </button>
    )
}

export { Button };