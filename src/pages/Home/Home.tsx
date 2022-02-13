import React, {useEffect} from 'react';

// @ts-ignore
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getMovieById} from "../../store";
import Movie from "../../components/HomePageMovie/Movie";

const Home = () => {
    const homeMovieId = 335787;

    const {movie} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    useEffect(()=> {
        dispatch(getMovieById(homeMovieId))
    }, [dispatch])

    return (
        <>
            {/*// @ts-ignore*/}
         <Movie key={movie.id} movie={movie}/>
        </>
    );
};

export {Home};