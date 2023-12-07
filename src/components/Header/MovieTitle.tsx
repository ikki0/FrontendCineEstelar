import './MovieTitle.css'

interface MovieTitleProps {
    title: string;
}

function MovieTitle({title} : MovieTitleProps): React.JSX.Element {
    return (
        <div className="container-title">
            <p>{title}</p>
        </div>
    )
}

export {MovieTitle}