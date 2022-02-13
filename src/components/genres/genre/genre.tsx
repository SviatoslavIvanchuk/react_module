import React, {FC} from 'react';

import {IGenresList} from "../../../interfaces";
import "./genre.css"
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../../hooks";
import {getMoviesByGenre} from "../../../store";

const Genre:FC<{genre: IGenresList}> = ({genre}) => {
    const dispatch = useAppDispatch();
    const {id, name} = genre;

    return (
        <div className="genreBlock">
            <Link to={`/genre/${name.split(' ')[0].toLowerCase()}`} >
                <div className="genre" onClick={() => dispatch(getMoviesByGenre(id))}>
                    {name}
                </div>
            </Link>
        </div>
    );
};

export default Genre;