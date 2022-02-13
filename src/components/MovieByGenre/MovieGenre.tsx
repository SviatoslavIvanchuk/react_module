import React from 'react';

import { useAppSelector} from "../../hooks";
import {MovieTitle} from "../MovieTitle/Movie.title";
import "./movie.css"
import PagGenre from "../Pag/PagGenre";


const MovieGenre = () => {
    const {moviesByGenre} = useAppSelector(state => state.movieReducer);

    return (
        <div className="movie">
            {moviesByGenre && moviesByGenre.map(movie => <MovieTitle key={movie.id} movie={movie}/>)}
            <div>
                <PagGenre/>
            </div>
        </div>
    );
};

export default MovieGenre;