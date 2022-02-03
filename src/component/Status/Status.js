import React from 'react';
import {useSelector} from "react-redux";

const Status = () => {
    const {list} = useSelector(state => state['listReducer']);

    console.log(list);

    const listCompleted = []
    for (const task of list) {
        if (task.status === true) {
            listCompleted.push(task)
        }
    }

    return (
        <div>
            <h1>All: {list.length} || Completed: {listCompleted.length} </h1>
        </div>
    );
};

export default Status;