import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../services/post.service";

const initialState = {
    posts: [],
    status: null,
    error: null
}

export const getAllPosts = createAsyncThunk(
    'postsSlice/getAllPosts',
    async (_, {rejectWithValue}) => {
        try {
            console.log(await postService.getAll());
            return 'Hello'
        } catch (e) {
            console.log(e);
            return rejectWithValue(e.message)
        }
    }
)

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllPosts.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.error = action.payload
        },
        [getAllPosts.rejected]: (state, action) => {
            state.status = 'reject'
            state.error = action.payload
        }
    }
})

const postsReducer = postsSlice.reducer;


export default postsReducer