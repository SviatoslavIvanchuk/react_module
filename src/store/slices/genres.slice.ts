import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genresListService} from "../../services";
import {IGenresList} from "../../interfaces";

interface IGenresListState {
    genres: IGenresList[]
}

const initialState:IGenresListState = {
    genres: []
}

export const getAllGenres = createAsyncThunk(
    'genresSlice/getAllGenres',
    async (_, {dispatch}) => {
        const {data} = await genresListService.getAll();
        dispatch(getGenres({genres: data}))
    }
)


const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {
        getGenres:(state, action) => {
            const {genres} = action.payload.genres
            state.genres = genres
        }
    }
});

const genresReducer = genresSlice.reducer;
export default genresReducer
export const {getGenres} = genresSlice.actions;
