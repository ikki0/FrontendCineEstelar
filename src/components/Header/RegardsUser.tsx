interface RegardsUserProps {
    nameUser: string;
}

function RegardsUser({nameUser}: RegardsUserProps): React.JSX.Element {
    return (
        <div>
            <p className="title-header">Bienvenido {nameUser}</p>
        </div>
    );
}

export {RegardsUser};