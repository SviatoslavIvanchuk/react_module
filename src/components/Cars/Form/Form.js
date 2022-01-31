import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import css from "./form.module.css";
import { creatCar} from "../../../store";

const Form = () => {
    const {handleSubmit, register, reset} = useForm();

    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(creatCar({data}))
        // console.log(data);
        reset()
    }
    
    return (
        <div>
            <form className={css.form} onSubmit={handleSubmit(submit)}>
                <label>Model: <input type="text" {...register('model')} /></label>
                <label>Price: <input type="text" {...register('price')} /></label>
                <label>Year: <input type="text" {...register('year')} /></label>
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;