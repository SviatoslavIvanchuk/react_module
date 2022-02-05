import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../services/user.service";

const initialState = {
    users: [],
    status: null,
    error: null
}

export const getAllUsers = createAsyncThunk(
    'usersSlice/getAllUsers',
    async (_, {dispatch}) => {
        try {
            dispatch(addUser(await userService.getAll()))
        } catch (e) {

        }
    }
)

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        addUser: (state, action) => {
           state.users = action.payload
        }
    },

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

const {addUser} = usersSlice.actions;

export default usersReducer