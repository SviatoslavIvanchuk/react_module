import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {carService} from "../services/car.service";

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            return await carService.getAll();

        } catch (e) {
            console.log(e);
            return rejectWithValue(e.message)
        }
    }
)

export const creatCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data}, {dispatch}) => {
        try {
            const newCar = await carService.create(data);
            dispatch(addCar({data: newCar}))
        }
        catch (e) {
            console.log(e);
        }
    }
)

export const removeCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, {dispatch}) => {
        try {
            await carService.deleteById(id);
            dispatch(deleteCar({id}))
        }
        catch (e) {

        }
    }
)


const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: []
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data)
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        }
    },
    extraReducers: {
        [getAllCars.pending]:(state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllCars.fulfilled]:(state, action) => {
            state.status = 'fulfilled'
            state.cars = action.payload
        },
        [getAllCars.rejected]:(state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }

})
const carReducer = carSlice.reducer

export const {addCar, deleteCar} = carSlice.actions;
export default carReducer