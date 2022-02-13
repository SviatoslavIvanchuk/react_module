import React from 'react';
import {Routes, Route} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import {Home, Genres} from "./pages";
import MovieGenre from "./components/MovieByGenre/MovieGenre";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import FoundMovies from "./components/FoundMovies/FoundMovies";


const App = () => {
  return (
      <>

          <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'movie/:title'} element={<MovieInfo/>}/>
                <Route path={'found'} element={<FoundMovies/>}/>
                <Route path={'genres'} element={<Genres/>}/>
                <Route path={'found/movie/:title'} element={<MovieInfo/>}/>
                <Route path={'genres/movie/:title'} element={<MovieInfo/>}/>
                <Route path={'genre/:genre'} element={<MovieGenre/>} />
                <Route path={'genre/:genre/movie/:title'} element={<MovieInfo/>}/>
            </Route>
          </Routes>
        
      </>
  );
};

export default App;
