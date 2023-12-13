import style from './MessageError.module.css'

interface MessageErrorProps {
    text: string
}

function MessageError({ text }: MessageErrorProps): React.JSX.Element {
    return (
        <div className={style.errorDiv}>
            <picture className={style.errorPicture}>
                <img className={style.errorImg} src="src/assets/images/SignUp/xMarkWhite.svg" alt="x mark image" />
            </picture>
            <p className={style.errorText}>
                {text}
            </p>
        </div>
    );
}

export { MessageError }