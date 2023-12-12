import { MovieClass } from "../../classes/MovieClass";
import './MovieElement.css';

interface MovieElementProps {
    movie: MovieClass;
}

function MovieElement({ movie }: MovieElementProps): React.JSX.Element {
    return (
        <>
            <div className="movie-element">
                <picture className='picture-movie'>
                    <img className='image-movie' src={movie.getUrl()} alt={movie.getTitle()} />
                </picture>
                <div className="movie_element-div-title">
                    <h2 className="movie_element-title">{movie.getTitle()}</h2>
                </div>
            </div>
        </>
    );

}

export { MovieElement }