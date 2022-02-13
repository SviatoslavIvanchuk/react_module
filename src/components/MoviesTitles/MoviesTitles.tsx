import React, {FC} from 'react';

import { MovieTitle } from '..';
import {useAppSelector} from "../../hooks";
import "./movies.css"
import Pag from "../Pag/Pag";

const MoviesTitles:FC = () => {
    const {moviesByPage} = useAppSelector(state => state.movieReducer);

    return (
        <div className="moviesBlock">
            {moviesByPage.map(movie => <MovieTitle key={movie.id} movie={movie} />)}
            <div>
                <Pag/>
            </div>
        </div>
    );
};

export default MoviesTitles;