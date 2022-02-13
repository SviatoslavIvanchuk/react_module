import React, {FC} from 'react';
import {useAppSelector} from "../../hooks";



import Movie from "./Movie/Movie";

const MovieInfo:FC = () => {
    const {movie} = useAppSelector(state => state.movieReducer);
    // @ts-ignore
    const {id} = movie;

    return (
        <>
            {/*// @ts-ignore*/}
            <Movie key={id} movie={movie} />
        </>
    );
};

export default MovieInfo;