import React from 'react';

// @ts-ignore
import css from './genres.module.css'
import MoviesTitles from "../../components/MoviesTitles/MoviesTitles";

const Genres = () => {
    return (
        <div className={css.genre}>
            <div className={css.movies}>
                <MoviesTitles/>
            </div>
        </div>
    );
};

export {Genres};