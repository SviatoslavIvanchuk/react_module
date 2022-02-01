import React from 'react';
import {useDispatch} from "react-redux";

import css from "./car.module.css";
import {carToUpdate, removeCar} from "../../../store";

const Car = ({car}) => {
    const {id, model, price, year} = car;
    const dispatch = useDispatch();


    return (
        <div className={css.carBlock}>
            <div className={css.text}>
                <h4>Model: {model}</h4>
                <h4>Price: {price}</h4>
                <h4>Year: {year}</h4>
            </div>
            <div className={css.buttons}>
                <button className={css.delete} onClick={() => dispatch(removeCar({id}))}>Delete</button>
                <button className={css.update} onClick={() => dispatch(carToUpdate({car}))}>Update</button>
            </div>
        </div>
    );
};

export default Car;