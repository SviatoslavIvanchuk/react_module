import React, {useReducer, useState} from 'react';

import {reducer} from "../Reducer/Reducer";
import Dog from "./Dog/Dog";


const Dogs = () => {
    const [dog, setDog] = useState([]);
    const [form, setForm] = useState({dogInput: ''});

    const [state, dispatch] = useReducer(reducer, {dog: []});

    const changeInput = (e) => {
        setDog({ id: new Date().getTime(), dog: e.target.value});
        setForm({dogInput: e.target.value})
    }

    const clickButton = () => {
        setForm({dogInput: ''})
        dispatch({type: 'dog', payload: dog})
    }

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <label>Add Dog:
                    <input type="text" name={'dogInput'} value={form.dogInput} onChange={changeInput}/>
                </label>
                <button onClick={clickButton}>Add</button>
            </form>
            <hr/>
            <div>
                {state.dog && state.dog.map(value => <Dog key={value.id} dog={value} dispatch={dispatch} />)}
            </div>
        </div>
    );
}

export default Dogs;