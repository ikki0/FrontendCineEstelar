import { TextField } from "@mui/material";
import './Seeker.css';
import { UseMovies } from "../../utils/hooks/UseMovies";
import { useState } from "react";
import { MovieClass } from "../../classes/MovieClass";
import { MovieTitle } from "./MovieTitle";

interface SeekerProps {
    setSearchIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

function Seeker({setSearchIsClicked}: SeekerProps): React.JSX.Element {

    const [movies, setMovies] = UseMovies();
    const [inputValue, setInputValue] = useState("");

    console.log('movies: ' , movies)

    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        setInputValue(event.target.value);
    }

    let filteredMovies: MovieClass[] = [];

    if (movies && Object.values(movies).length > 0) {
        if (inputValue.length !== 0){
            filteredMovies = movies.filter(movie => movie.getTitle().toLowerCase().includes(inputValue.toLowerCase()));
        }
    }
 
    return(
        <div className="find-movie">
            <picture className="picture-close">
                <img 
                    onClick={()=> setSearchIsClicked(false)}
                    className='img-close' src="src/assets/images/Header/closeWhite.svg" 
                    alt="image close"/>
            </picture>
            <TextField 
                onChange={handleChange}
                id="outlined-basic" 
                label="Buscar Película" 
                variant="outlined" 
                value={inputValue}
                sx={{
                    width: '82.5%',
                    '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'var(--colorBorder)',
                    },
                    '&:hover fieldset': {
                        borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'white',
                    },
                    },
                    '& .MuiInputBase-input': {
                    color: 'white',
                    '&::placeholder': {
                        color: 'white',
                    },
                    },
                    '& .MuiFormLabel-root': {
                        color: 'white',
                    },
                }}
            />

            {filteredMovies.map(movie => (
                <MovieTitle title={movie.getTitle()} />
            ))}
        </div>
    );
}

export { Seeker } 