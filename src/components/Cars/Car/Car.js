import React from 'react';
import {useDispatch} from "react-redux";

import css from "./car.module.css";
import {removeCar} from "../../../store";

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
            <button onClick={() => dispatch(removeCar({id}))}>Delete</button>
        </div>
    );
};

export default Car;