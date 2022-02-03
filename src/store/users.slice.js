import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../services/user.service";

const initialState = {
    users: [],
    status: null,
    error: null
}

export const getAllUsers = createAsyncThunk(
    'usersSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            console.log(await userService.getAll());
            return await userService.getAll()
        } catch (e) {
            console.log(e);
            return rejectWithValue(e.message)
        }
    }
)

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {},

    extraReducers: {
        [getAllUsers.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.error = action.payload
        },
        [getAllUsers.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }


})

const usersReducer = usersSlice.reducer;


export default usersReducer