import style from './ButtonSubmit.module.css';

interface ButtonSubmitProps {
    text: string;
    onClick:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function ButtonSubmitOnClick({ text, onClick }: ButtonSubmitProps): React.JSX.Element {
    return (
        <button
            className={style.button}
            type="submit"
            onClick={onClick}
        >
            { text }
        </button>
    );
}

export { ButtonSubmitOnClick }