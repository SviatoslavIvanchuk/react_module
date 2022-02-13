import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllGenres} from "../../store/slices/genres.slice";
import Genre from "./genre/genre";


const GenresList:FC = () => {

    const {genres} = useAppSelector(state => state.genresReducer);
    const dispatch = useAppDispatch();

    useEffect(()=> {
        dispatch(getAllGenres())
    }, [dispatch])

    // console.log(genres)

    return (
        <>
            {genres.map(genre => <Genre key={genre.id} genre={genre} />)}
        </>
    );
};

export default GenresList;