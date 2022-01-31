import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Car from "../Car/Car";
import css from "./cars.module.css";
import {getAllCars} from "../../../store"

const Cars = () => {
    const {cars, status, error} = useSelector(state => state['carReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars())
    }, [dispatch])

    return (
        <div className={css.carsBlock}>
            {status === 'pending' && <h2>Loading...</h2>}
            {error && <h3>{error}</h3>}
            {cars.map(car => <Car key={car.id} car={car} />)}
        </div>
    );
};

export default Cars;