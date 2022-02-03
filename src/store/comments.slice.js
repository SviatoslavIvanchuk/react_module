import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentService} from "../services/comment.service";


const initialState = {
    comments: [],
    status: null,
    error: null
}

export const getAllComments = createAsyncThunk(
    'commentsSlice/getAllComments',
    async (_, {rejectedWithValue}) => {
        try {
            console.log(await commentService.getAll())
            return await commentService.getAll()
        } catch (e) {
            return rejectedWithValue(e.message())
        }
    }
)

const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState,
    reducers: {
        [getAllComments.pending]: (state) => {
            state.status = 'pending'
            state.error = 'null'
        },
        [getAllComments.fulfilled]: (state, active) => {
            state.status = 'fulfilled'
            state.error = active.payload
        },
        [getAllComments.rejected]: (state, active) => {
            state.status = 'rejected'
            state.error = active.payload
        },
    }
})

const commentsReducer = commentsSlice.reducer;


export default commentsReducer