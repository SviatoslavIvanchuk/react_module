import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IMovieForTitle, IPageId} from "../../interfaces";
import {movieTitleService} from "../../services";

interface IMovieState {
    movie: IMovieState[]
    movies: IMovieForTitle[],
    moviesByPage: IMovieForTitle[],
    moviesByGenre: IMovieForTitle[],
    getGenreId: IPageId[],
    moviesBySearch: IMovieForTitle[]
}

const initialState:IMovieState = {
    movie: [],
    movies:[],
    moviesByPage: [],
    moviesByGenre: [],
    getGenreId: [],
    moviesBySearch: []
}


export const getMovieById = createAsyncThunk<void,number>(
    'movieSlice/getAllMovies',
    async (id, {dispatch}) => {
        const {data} = await movieTitleService.getById(id);
        dispatch(setMovie({movie: data}))
    }
);

export const getAllMoviesByPage = createAsyncThunk<void,number>(
    'movieSlice/getAllMoviesByPage',
    async (page, {dispatch}) => {
        const {data} = await movieTitleService.getAllByPage(page)
        dispatch(setMoviesByPage({moviesByPage: data}))
    }
)

export const getMoviesByGenre = createAsyncThunk<void,number>(
    'movieSlice/getMoviesByPageAndGenre',
// @ts-ignore
    async (id, {dispatch}) => {
        const {data} = await movieTitleService.getByGenre(id);
        dispatch(setMoviesByGenre({moviesByGenre: data, genreId: id}))
    }
)

export const getMoviesByGenreAndPage = createAsyncThunk<void,object>(
    'movieSlice/getMoviesByGenreAndPage',
    // @ts-ignore
    async ({id, pageId}, {dispatch}) => {
        const {data} = await movieTitleService.getByGenreAndPage(id, pageId);
        dispatch(setMoviesByGenreAndPage(data))
    }
)

export const searchMoviesByTitle = createAsyncThunk<void,string>(
    'movieSlice/searchMoviesByTitle',
    // @ts-ignore
    async (title, {dispatch}) => {
        const {data} = await movieTitleService.searchByTitle(title);
        dispatch(setMoviesBySearch(data))
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setMovie:(state, action) => {
            state.movie = action.payload.movie;
        },

        setMoviesByPage:(state, action) => {
            const {results} = action.payload.moviesByPage;
            state.moviesByPage = results;
        },

        setMoviesByGenre:(state, action) => {
            const {results} = action.payload.moviesByGenre;
            state.moviesByGenre = results
            state.getGenreId = action.payload.genreId
        },
        setMoviesByGenreAndPage: (state, action) => {
            const {results} = action.payload;
            state.moviesByGenre = results
        },
        setMoviesBySearch: (state, action) => {
            state.moviesBySearch = action.payload.results
        }
    }
});

const movieReducer = movieSlice.reducer;
export default movieReducer
export const {setMovie, setMoviesByPage, setMoviesByGenre, setMoviesByGenreAndPage, setMoviesBySearch} = movieSlice.actions;


