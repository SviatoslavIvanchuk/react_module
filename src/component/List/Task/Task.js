import React from 'react';

import css from "./task.module.css";
import {useDispatch} from "react-redux";
import {deleteTask, strikeTask} from "../../../store/list.slice";

const Task = ({taskProps}) => {
    const {id, task, status} = taskProps;

    const dispatch = useDispatch();


    return (
        <div className={css.task}>
            <input type="checkbox" value={status} onClick={() => dispatch(strikeTask(id))} />
            <h2 className={status? css.strike: ''}>{task}</h2>
            <button onClick={() => dispatch(deleteTask(id))}>Delete</button>
        </div>
    );
};

export default Task;