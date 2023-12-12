import { MovieClass } from "../../classes/MovieClass";
import { MovieElement } from "./MovieElement";
import './MainContainer.css';
import { TitleContainer } from "./TitleContainer";

interface MainContainerProps {
    title: string;
    moviesObject: MovieClass[];
}

function MainContainer({title, moviesObject } : MainContainerProps): React.JSX.Element {
    return (
        <section className="container-section">
            <TitleContainer title={title}/>
            <div className="cards">
                {
                    moviesObject.map((movie, index) => (  
                            <MovieElement key={index} movie={movie}/>
                    ))
                }
            </div>
        </section>
    );
}

export { MainContainer }