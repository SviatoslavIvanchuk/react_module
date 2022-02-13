import {createSlice} from "@reduxjs/toolkit";
import {ISwitchStatus} from "../../interfaces";

interface ISwitchState {
    status: ISwitchStatus[]
}

const initialState: ISwitchState = {
    status: []
}

const switchSlice = createSlice({
    name: 'switchSlice',
    initialState,
    reducers: {
        getSwitchStatus: (state, action) => {
            state.status = action.payload
        }
    }
});

const switchReducer = switchSlice.reducer;
export default switchReducer
export const {getSwitchStatus} = switchSlice.actions;