import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import css from "./form.module.css";
import {creatCar, updateCarById} from "../../../store";

const Form = () => {
    const {handleSubmit, register, reset, setValue} = useForm();
    const {carForUpdate} = useSelector(state => state['carReducer']);

    const dispatch = useDispatch();

    const submit = (data) => {
        console.log(carForUpdate);
        console.log(data);
        if (data && carForUpdate.id) {
            dispatch(updateCarById({id: carForUpdate.id, car: data}))
            console.log(carForUpdate);

        } else if (data) {
            dispatch(creatCar({data}))
            console.log(data);
        }
        reset()
    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue])

    
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