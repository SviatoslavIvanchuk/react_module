import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../services/post.service";

const initialState = {
    posts: [],
    status: null,
    error: null
}

export const getAllPosts = createAsyncThunk(
    'postsSlice/getAllPosts',
    async (_, {dispatch}) => {
        try {
            dispatch(addPosts(await postService.getAll()))
        } catch (e) {
            console.log(e);
        }
    }
)

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {
        addPosts: (state, action) => {
            state.posts = action.payload
        }
    },
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

const {addPosts} = postsSlice.actions;

export default postsReducer