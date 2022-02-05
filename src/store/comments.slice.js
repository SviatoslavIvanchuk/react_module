import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentService} from "../services/comment.service";


const initialState = {
    comments: [],
    status: null,
    error: null
}

export const getAllComments = createAsyncThunk(
    'commentsSlice/getAllComments',
    async (_, {dispatch}) => {
        try {
            dispatch(addComments(await commentService.getAll()))
        } catch (e) {

        }
    }
)

const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState,
    reducers: {
        addComments: (state, action) => {
            state.comments = action.payload
        }
    },
    extraReducers: {
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
        }
    }
})

const commentsReducer = commentsSlice.reducer;

const {addComments} = commentsSlice.actions;

export default commentsReducer