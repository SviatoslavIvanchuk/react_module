import React, {FC} from 'react';
import {IMovieInfo} from "../../../interfaces";


import "./movieInfo.css";
import {imgURL, youTube} from "../../../configs";
import {Rating} from "@material-ui/lab";

const Movie:FC<{movie: IMovieInfo}> = ({movie}) => {

    const {poster_path, vote_average, budget, release_date, revenue,runtime, status, vote_count,
            backdrop_path, title, genres, production_companies, overview, videos} = movie;

    const genreMovie = (genre: any) => {return ' "'+genre.name+'". '}
    const prodCompany = (company: any) => {
        if (company.logo_path !== null) {
            return  <div className="comp">
                        <img src={imgURL+company.logo_path} alt="logo"/>
                        <h4>{company.name}</h4>
                    </div>
        }
    }



    return (
        <div className="movieInfo">
            <div className="short">
                <img src={imgURL+poster_path} alt=""/>
                <div className="lines">
                    <div className="rating">
                        <Rating name='half-rating' defaultValue={vote_average/2} precision={0.1} size={"large"}/>
                    </div>
                    <h4>Budget: {budget}</h4>
                    <h5>Release date: {release_date}</h5>
                    <h4>Revenue: {revenue}</h4>
                    <h5>Runtime: {runtime}</h5>
                    <h4>Status: {status}</h4>
                    <h5>Vote: {vote_average} / {vote_count} ImDB</h5>
                </div>
            </div>
            <div className="fullInfo">
                <h1>{title}</h1>
                <img src={imgURL+backdrop_path} alt="img"/>
                <div className="prodComp">
                    {production_companies.map(value => prodCompany(value))}
                </div>
                <div className="lines">
                    <h4>Genres: {genres.map(genre => genreMovie(genre))}</h4>
                    <p>Overview: {overview}</p>
                </div>
                    {/*// @ts-ignore*/}
                    <iframe title={title} className="video" src={youTube + videos.results[0].key} frameBorder="0"
                            allowFullScreen>Video</iframe>
            </div>
        </div>
    );
};

export default Movie;