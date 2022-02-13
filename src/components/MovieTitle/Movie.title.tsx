import React, {FC} from 'react';
import {IMovieForTitle} from "../../interfaces";
import {Rating} from "@material-ui/lab";


import "./movie.css"
import {imgURL} from "../../configs";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../hooks";
import {getMovieById} from "../../store";
import notFound from "../images/notFound";

const MovieTitle:FC<{movie:IMovieForTitle}> = ({movie}) => {

    const {title, overview, poster_path, vote_average, id} = movie;

    const posterImg = (poster_path: any) => {
      if (poster_path) {
          return imgURL+poster_path
      } else {
          return notFound
      }
    }


    const voteColor = (vote_average: any) => {
      if (vote_average >= 8) {

          return 'green'
      } else if (vote_average <= 5.5) {
          return 'red'
        } else {return 'orange'}
    }

    const dispatch = useAppDispatch();
    return (
        <Link to={`movie/${id}-${title.split(' ').join('-').toLowerCase()}`} className="movieBlock"
            onClick={()=> dispatch(getMovieById(id))}>
            <div onClick={()=> dispatch(getMovieById(id))}>
            <img src={posterImg(poster_path)} alt="poster"/>

            <div className="title">
                <div className="titleString" >
                    <h4>{title}</h4>
                </div>
                <div className="titleVote" >
                    <span style={{color: `${voteColor(vote_average)}`}}>{vote_average}</span>
                </div>
            </div>

            <div className="overview">
                <div className="rating">
                    <Rating name={'rating'} value={vote_average/2} readOnly  precision={0.1}/>
                </div>
                <h4>Overview</h4>
                <p>{overview}</p>
            </div>
            </div>
        </Link>
    );
};

export {MovieTitle};