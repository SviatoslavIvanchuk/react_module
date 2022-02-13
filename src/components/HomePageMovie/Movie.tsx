import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {IMovieInfo} from "../../interfaces";
import {unchartedImg} from "../images/searchIcon";

import "./movie.css"
import {useAppDispatch} from "../../hooks";
import {getMovieById} from "../../store";

const Movie:FC<{movie: IMovieInfo}> = ({movie}) => {
    const dispatch = useAppDispatch();
    const {title, overview, vote_average, release_date, id} = movie;


    return (
        <div className="home">
            <div className="newMovie">
                <img src={unchartedImg} alt=""/>
                <div className="info">
                    <h1>{title}</h1>
                    <div className="about">
                        <h4><span>IMDb:</span> {vote_average}</h4>
                        <div className="quality"><h6>HD</h6></div>
                        <h4>{release_date}</h4>
                    </div>
                    <p>{overview}</p>
                <Link to={`/movie/${id}`} className="link"
                        onClick={()=> dispatch(getMovieById(id))}>
                    <div className="link"><span>Play</span></div>
                </Link>
                </div>
            </div>
            <div className="lastMovie">

            </div>
        </div>
    );
};

export default Movie;