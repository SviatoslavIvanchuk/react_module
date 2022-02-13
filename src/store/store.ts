import {configureStore, combineReducers} from "@reduxjs/toolkit";

import movieReducer from "./slices/movie.slice";
import genresReducer from "./slices/genres.slice";
import switchReducer from "./slices/switch.slice";

const rootReducer = combineReducers({
    movieReducer,
    genresReducer,
    switchReducer
})


export const setupStore = () => configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']