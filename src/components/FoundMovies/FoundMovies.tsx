import React from 'react';

import {useAppSelector} from "../../hooks";
import "./movies.css"
import {MovieTitle} from "../MovieTitle/Movie.title";

const FoundMovies = () => {
    const {moviesBySearch} = useAppSelector(state => state.movieReducer);

    return (
        <div className="foundPage">
            {moviesBySearch.map(movie => <MovieTitle key={movie.id} movie={movie}/>) }
        </div>
    );
};

export default FoundMovies;