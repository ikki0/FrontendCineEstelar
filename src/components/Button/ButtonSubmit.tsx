import style from './ButtonSubmit.module.css';

interface ButtonSubmitProps {
    text: string;
}

function ButtonSubmit({ text }: ButtonSubmitProps): React.JSX.Element {
    return (
        <button
            className={style.button}
            type="submit"
        >
            { text }
        </button>
    );
}

export { ButtonSubmit }