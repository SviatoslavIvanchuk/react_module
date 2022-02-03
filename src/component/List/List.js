import React from 'react';
import {useSelector} from "react-redux";

import Task from "./Task/Task";
import css from "./list.module.css"

const List = () => {
    const {list} = useSelector(state => state['listReducer']);

    return (
        <div className={css.list}>
            {list.map(task => <Task key={task.id} taskProps={task} />)}
        </div>
    );
};

export default List;