import React, {useReducer, useState} from "react";

import {reducer} from "../Reducer/Reducer";
import Cat from "./Cat/Cat";


const Cats = () => {
    const [cat, setCat] = useState([]);
    const [form, setForm] = useState({catInput: ''});

    const [state, dispatch] = useReducer(reducer, {cat: []});


    const changeInput = (e) => {
        setCat({id: new Date().getTime(), cat: e.target.value});
        setForm({catInput: e.target.value})
    }

    const clickButton = () => {
        setForm({catInput: ''});
        dispatch({type: "cat", payload: cat});
    };

    return (
        <div>
            <form onSubmit={e => e.preventDefault()}>
                <label>Add Cat:
                    <input type="text" name="catInput" value={form.catInput || ""} onChange={changeInput}/>
                </label>
                <button onClick={clickButton}>Add</button>
            </form>
                <hr/>
            <div>
                {state.cat && state.cat.map(value => <Cat key={value.id} cat={value} dispatch={dispatch} />)}
            </div>
        </div>
    );
};

export default Cats;