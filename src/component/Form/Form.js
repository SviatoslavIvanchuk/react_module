import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addTask} from "../../store/list.slice";
import css from "./form.module.css";

const Form = () => {
    const {handleSubmit, register, reset} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        if (data.task === '') {
            console.log('Заповніть поле')
        } else {
            dispatch(addTask({data: data.task}))
        }
        reset()
    }

    return (
        <div className={css.form}>
            <form onSubmit={handleSubmit(submit)}>
                <label><span>Write a task: </span><input type="text" {...register('task')}/></label>
                <button>Add task</button>
            </form>
        </div>
    );
};

export default Form;