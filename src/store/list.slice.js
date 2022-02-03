import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    list: []
}


const listSlice = createSlice({
    name: 'listSlice',
    initialState,
    reducers: {
        addTask: (state, action) => {
            console.log(action.payload.data)
            state.list.push({id: new Date().getTime(), task: action.payload.data, status: false})
        },
        deleteTask: (state, action) => {
            state.list = state.list.filter(task => task.id !== action.payload)
        },
        strikeTask: (state, action) => {
            const findTask = state.list.find(task => task.id === action.payload);
            findTask.status = !findTask.status
            console.log('hello')
        }
    },
});

const listReducer = listSlice.reducer;

export const {addTask, deleteTask, strikeTask} = listSlice.actions;

export default listReducer